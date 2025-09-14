import React, { useState, useEffect } from "react";
import { Menu, X, Sprout } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ currentPage, setCurrentPage, language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (page) => {
    if (page === 'contact') {
      navigate('/contact');
    } else if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ta" : "en"));
  };

  const menuItems = [
    { key: "home", en: "Home", ta: "முகப்பு" },
    { key: "contact", en: "Contact", ta: "தொடர்பு" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-500 shadow-lg" : "bg-gray-500/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 p-2 rounded-lg">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">AgroTech</h1>
              <p className="text-xs text-gray-200">
                {language === "en" ? "Rural Innovation" : "ஊரக புதுமை"}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.key)}
                className={`capitalize font-medium transition-colors duration-200 hover:text-green-300 ${
                  (item.key === 'home' && location.pathname === '/') ||
                  (item.key !== 'home' && location.pathname === `/${item.key}`)
                    ? "text-green-300 font-semibold"
                    : "text-white"
                }`}
              >
                {language === "en" ? item.en : item.ta}
              </button>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="bg-white text-red-700 font-semibold px-3 py-1 rounded"
            >
              {language === "en" ? "தமிழ்" : "EN"}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.key)}
                className={`block w-full text-left px-4 py-2 capitalize text-gray-700 hover:bg-gray-50 hover:text-green-500 transition-colors duration-200 ${
                  (item.key === 'home' && location.pathname === '/') ||
                  (item.key !== 'home' && location.pathname === `/${item.key}`)
                    ? "text-green-500 font-semibold bg-gray-50"
                    : ""
                }`}
              >
                {language === "en" ? item.en : item.ta}
              </button>
            ))}

            {/* Mobile Language Toggle */}
            <div className="px-4 mt-4">
              <button
                onClick={toggleLanguage}
                className="bg-red-700 text-white w-full py-2 rounded"
              >
                {language === "en" ? "தமிழ்" : "EN"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
