import React from "react";
import { useNavigate } from "react-router-dom";

const TamilMannvalam = ({ language }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-100 pt-20">
      <div className="max-w-4xl mx-auto p-6">
        <button
          onClick={() => navigate("/")}
          className="mb-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          {language === "en" ? "← Back to Home" : "← முகப்புக்கு திரும்பு"}
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-red-700">
            {language === "en" ? "TAMIL MANNVALAM" : "தமிழ் மண் வளம்"}
          </h1>
          
          <div className="text-center mb-8">
            <img 
              src="src/image/TAMIL MANNVALAM.jpg" 
              alt="Tamil Mannvalam"
              className="w-48 h-48 object-cover rounded-full mx-auto mb-4 border-4 border-red-700"
            />
          </div>

          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              {language === "en" 
                ? "Tamil Mannvalam is a comprehensive soil health management program designed to improve agricultural productivity through scientific soil testing and nutrient management."
                : "தமிழ் மண் வளம் என்பது அறிவியல் அடிப்படையிலான மண் பரிசோதனை மற்றும் ஊட்டச்சத்து மேலாண்மை மூலம் வேளாண் உற்பத்தித்திறனை மேம்படுத்தும் ஒரு விரிவான மண் ஆரோக்கிய மேலாண்மை திட்டமாகும்."}
            </p>
            
            <div className="bg-pink-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-red-600">
                {language === "en" ? "Key Features" : "முக்கிய அம்சங்கள்"}
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>{language === "en" ? "Free soil testing for farmers" : "விவசாயிகளுக்கு இலவச மண் பரிசோதனை"}</li>
                <li>{language === "en" ? "Soil health card issuance" : "மண் ஆரோக்கிய அட்டை வழங்கல்"}</li>
                <li>{language === "en" ? "Crop-specific nutrient recommendations" : "பயிருக்கேற்ற ஊட்டச்சத்து பரிந்துரைகள்"}</li>
                <li>{language === "en" ? "Mobile soil testing labs" : "மொபைல் மண் பரிசோதனை ஆய்வகங்கள்"}</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-green-600">
                {language === "en" ? "Benefits" : "நன்மைகள்"}
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>{language === "en" ? "Increased crop yield" : "அதிகரித்த பயிர் உற்பத்தி"}</li>
                <li>{language === "en" ? "Reduced input costs" : "குறைந்த உள்ளீட்டு செலவுகள்"}</li>
                <li>{language === "en" ? "Improved soil fertility" : "மேம்பட்ட மண் வளம்"}</li>
                <li>{language === "en" ? "Sustainable farming practices" : "நிலைத்தன்மை வாய்ந்த விவசாய நடைமுறைகள்"}</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={() => window.open('https://www.tnagrisnet.tn.gov.in/mannvalam/soils_mob/tm', '_blank')}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              {language === "en" ? "Visit Official Website" : "அதிகார இணையதளத்தை பார்வையிடவும்"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TamilMannvalam;
