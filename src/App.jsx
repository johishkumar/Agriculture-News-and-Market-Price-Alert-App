import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Dashboard from './components/Dashboard.jsx';
import TamilMannvalam from './components/TamilMannvalam.jsx';
import SubsidyScheme from './components/SubsidyScheme.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en'); // Shared language state
  const navigate = useNavigate();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage language={language} />;
      case 'contact':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
              {language === 'en' ? 'Contact Us' : 'தொடர்பு கொள்ளுங்கள்'}
            </h1>
            <Contact language={language} />
          </div>
        );
      case 'dashboard':
        return <Dashboard language={language} />;
      default:
        return <HomePage language={language} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        language={language}
        setLanguage={setLanguage}
      />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/contact" element={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
                {language === 'en' ? 'Contact Us' : 'தொடர்பு கொள்ளுங்கள்'}
              </h1>
              <Contact language={language} />
            </div>
          } />
          <Route path="/dashboard" element={<Dashboard language={language} />} />
          <Route path="/tamil-mannvalam" element={<TamilMannvalam language={language} />} />
          <Route path="/subsidy-scheme" element={<SubsidyScheme language={language} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer language={language} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
