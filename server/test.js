// Using built-in fetch (Node 18+)

const BASE_URL = 'http://localhost:5000/api';

// Test data
const testPhone = '8508614016';
const testOtp = '123456'; // Will be updated from console log
const testContact = {
  name: 'Test User',
  email: 'test@example.com',
  company: 'Test Company',
  message: 'This is a test message',
  phone: testPhone
};

async function testVerifyPhone() {
  console.log('Testing /api/verify-phone...');
  try {
    const response = await fetch(`${BASE_URL}/verify-phone`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: testPhone })
    });
    const data = await response.json();
    console.log('Response:', data);
    if (response.ok) {
      console.log('✅ OTP sent successfully');
    } else {
      console.log('❌ Failed to send OTP');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function testVerifyOtp(otp) {
  console.log('Testing /api/verify-otp...');
  try {
    const response = await fetch(`${BASE_URL}/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: testPhone, otp })
    });
    const data = await response.json();
    console.log('Response:', data);
    if (response.ok) {
      console.log('✅ OTP verified successfully');
    } else {
      console.log('❌ Failed to verify OTP');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function testContactForm() {
  console.log('Testing /api/contact...');
  try {
    const response = await fetch(`${BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testContact)
    });
    const data = await response.json();
    console.log('Response:', data);
    if (response.ok) {
      console.log('✅ Contact form submitted successfully');
    } else {
      console.log('❌ Failed to submit contact form');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function testInvalidPhone() {
  console.log('Testing invalid phone number...');
  try {
    const response = await fetch(`${BASE_URL}/verify-phone`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: '1234567890' }) // Invalid TN number
    });
    const data = await response.json();
    console.log('Response:', data);
    if (!response.ok) {
      console.log('✅ Correctly rejected invalid phone number');
    } else {
      console.log('❌ Should have rejected invalid phone number');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function runTests() {
  console.log('Starting API tests...\n');

  // Test valid phone
  await testVerifyPhone();

  // Wait for user to input OTP from console
  console.log('\n📝 Check the server console for the OTP, then update testOtp in this file and run testVerifyOtp manually.');

  // Test invalid phone
  await testInvalidPhone();

  // Test contact form
  await testContactForm();

  console.log('\nTest suite completed.');
}

// Manual test for OTP verification (run after getting OTP from console)
async function testOtpManually() {
  const otp = process.argv[2]; // Pass OTP as argument
  if (!otp) {
    console.log('Usage: node test.js <otp>');
    return;
  }
  await testVerifyOtp(otp);
}

// Run tests
if (process.argv[2] === 'verify') {
  testOtpManually();
} else {
  runTests();
}
