import React from 'react';
import { useNavigate } from 'react-router-dom';

const FarmGuide = () => {
  const navigate = useNavigate();

  const handleVisitWebsite = () => {
    window.open('https://www.tnagrisnet.tn.gov.in/people_app_demo/crop_plan/mobile_no/en/20/2020', '_blank');
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-600 text-white p-6">
            <h1 className="text-3xl font-bold text-center">Farm Guide</h1>
            <p className="text-center mt-2 text-green-100">
              Your comprehensive guide to agricultural resources and information
            </p>
          </div>
          
          <div className="p-8">
            <div className="text-center mb-8">
              <img 
                src="/src/image/FARM GUIDE.jpg" 
                alt="Farm Guide" 
                className="w-full max-w-md mx-auto rounded-lg shadow-md"
              />
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Welcome to the Farm Guide Portal
              </h2>
              
              <p className="text-gray-600 mb-6">
                Access comprehensive agricultural information, crop planning tools, and official government resources 
                to help you make informed decisions about your farming operations.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Official Crop Planning Portal
                </h3>
                <p className="text-blue-700">
                  Visit the official Tamil Nadu Agricultural Department portal for detailed crop planning information, 
                  mobile-based services, and agricultural guidance.
                </p>
              </div>

              <div className="text-center space-y-4">
                <button
                  onClick={handleVisitWebsite}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                >
                  Visit Official Website
                </button>
                
                <button
                  onClick={handleGoBack}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg ml-4"
                >
                  Go Back
                </button>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Features Available:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Crop planning tools</li>
                    <li>• Mobile-based services</li>
                    <li>• Agricultural guidance</li>
                    <li>• Weather information</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">How to Use:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Click "Visit Official Website"</li>
                    <li>• Access crop planning tools</li>
                    <li>• Get mobile-based services</li>
                    <li>• Receive agricultural guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmGuide;
