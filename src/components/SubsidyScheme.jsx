import React from 'react';

const SubsidyScheme = ({ language }) => {
  const subsidySchemes = [
    {
      en: {
        title: "Agricultural Subsidy Scheme",
        description: "Comprehensive subsidy scheme for farmers including crop loans, equipment subsidies, and insurance benefits.",
        benefits: [
          "Crop loan subsidy up to 50%",
          "Agricultural equipment subsidy",
          "Crop insurance coverage",
          "Seed and fertilizer subsidies"
        ]
      },
      ta: {
        title: "வேளாண் தள்ளுபடி திட்டம்",
        description: "விவசாயிகளுக்கான விரிவான தள்ளுபடி திட்டம் இதில் பயிர் கடன்கள், உபகரண தள்ளுபடிகள் மற்றும் காப்பீடு நன்மைகள் அடங்கும்.",
        benefits: [
          "50% வரை பயிர் கடன் தள்ளுபடி",
          "வேளாண் உபகரண தள்ளுபடி",
          "பயிர் காப்பீடு கவரேஜ்",
          "விதை மற்றும் உர தள்ளுபடிகள்"
        ]
      }
    }
  ];

  const currentScheme = subsidySchemes[0][language];

  return (
    <div className="min-h-screen bg-pink-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-red-700">
            {currentScheme.title}
          </h1>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {currentScheme.description}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              {language === 'en' ? 'Benefits' : 'நன்மைகள்'}
            </h2>
            <ul className="space-y-3">
              {currentScheme.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 p-6 bg-pink-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {language === 'en' ? 'How to Apply' : 'எப்படி விண்ணப்பிக்க வேண்டும்'}
            </h3>
            <p className="text-gray-700">
              {language === 'en' 
                ? "Visit your nearest agricultural office or apply online through the official portal."
                : "உங்கள் அருகிலுள்ள வேளாண் அலுவலகத்தை அணுகுங்கள் அல்லது அதிகாரப்பூர்வ இணையதளத்தில் ஆன்லைனில் விண்ணப்பிக்கவும்."
              }
            </p>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.tnagrisnet.tn.gov.in/people_app/scheme/index/tm/20/2020"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-red-700 transition-colors duration-300"
            >
              {language === 'en' ? 'Visit Official Website' : 'அதிகாரப்பூர்வ இணையதளம்'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubsidyScheme;