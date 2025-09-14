import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import twilio from 'twilio';
import jwt from 'jsonwebtoken';
import User from './models/User.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/agriDB';

// Twilio setup (only if credentials are provided and valid)
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;
const client = (accountSid && accountSid.startsWith('AC') && authToken) ? twilio(accountSid, authToken) : null;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(mongoURI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Contact schema and model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  message: String,
  phone: String,
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

const otpStore = new Map();

app.post('/api/verify-phone', async (req, res) => {
  try {
    const { phone } = req.body;
    const digitsOnlyPhone = phone.replace(/\D/g, '');

    // Check for exactly 10 digits and TN prefix
    const validTNPrefixes = ['7', '8', '9'];
    const firstDigit = digitsOnlyPhone.charAt(0);

    if (digitsOnlyPhone.length !== 10 || !validTNPrefixes.includes(firstDigit)) {
      return res.status(400).json({ error: 'Only Tamil Nadu phone numbers are allowed (starting with 7, 8, or 9).' });
    }

    if (client && verifyServiceSid) {
      // Send OTP via Twilio Verify
      await client.verify.v2.services(verifyServiceSid).verifications.create({
        to: `+91${digitsOnlyPhone}`,
        channel: 'sms'
      });
      console.log(`OTP sent to phone ${digitsOnlyPhone} via Twilio Verify`);
    } else {
      // Fallback to console log if Twilio not configured
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      otpStore.set(digitsOnlyPhone, otp);
      console.log(`OTP for phone ${digitsOnlyPhone}: ${otp} (Sent - Console fallback)`);
    }

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
});

// API endpoint to verify OTP
app.post('/api/verify-otp', async (req, res) => {
  try {
    const { phone, otp } = req.body;
    const digitsOnlyPhone = phone.replace(/\D/g, '');

    if (client && verifyServiceSid) {
      // Verify OTP via Twilio Verify
      const verificationCheck = await client.verify.v2.services(verifyServiceSid).verificationChecks.create({
        to: `+91${digitsOnlyPhone}`,
        code: otp
      });

      if (verificationCheck.status === 'approved') {
        return res.status(200).json({ message: 'OTP verified successfully' });
      } else {
        return res.status(400).json({ error: 'Invalid OTP' });
      }
    } else {
      // Fallback to stored OTP if Twilio not configured
      const storedOtp = otpStore.get(digitsOnlyPhone);
      if (storedOtp && storedOtp === otp) {
        otpStore.delete(digitsOnlyPhone);
        return res.status(200).json({ message: 'OTP verified successfully' });
      } else {
        return res.status(400).json({ error: 'Invalid OTP' });
      }
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: 'Failed to verify OTP' });
  }
});

// API endpoint to receive contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, message, phone } = req.body;

    const newContact = new Contact({ name, email, company, message, phone });
    await newContact.save();

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = new User({ name, email, phone, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'secretkey', { expiresIn: '1h' });

    res.json({ token, message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
