import React from 'react';
import { Sprout, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-500 p-3 rounded-lg">
                <Sprout className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">AgroTech</h3>
                <p className="text-green-400 text-sm">Rural Innovation</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering farmers and rural communities with cutting-edge technology, 
              sustainable practices, and innovative food solutions for a better tomorrow.
            </p>
            
            <div className="flex space-x-4">
              {[
                //{ icon: <Facebook className="h-5 w-5" />, href: '#' },
                { icon: <Twitter className="h-5 w-5" />,  href: 'https://x.com/JohishKuma45550'},
                { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/itz_johish_01/?__pwa=1' },
                { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/johishkumar-k-c-johishkumar-k-c-670029348/' },
                { icon: <Mail className="h-5 w-5" />,   href: 'https://mail.google.com/mail/?view=cm&fs=1&to=johish6383@gmail.com' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-green-500 p-3 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Solutions', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">Solutions</h4>
            <ul className="space-y-3">
              {[
                'Smart Farming',
                'Water Management',
                'Crop Analytics',
                'Supply Chain',
                'Insurance'
              ].map((solution) => (
                <li key={solution}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2025 AgroTech. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;