import React from "react";
import { useNavigate } from "react-router-dom";

// Service data with both English & Tamil translations
const services = [
  // { en: "PATTA CHITTA", ta: "பட்டா சிட்டா ", image: "src/image/patta.jpg" },
  //  { en: "FMP MAP", ta: " புலப்படம்", image: "src/image/FMP.jpeg" },
  { en: "TAMIL MANNVALAM", ta: "தமிழ் மண் வளம்", image: "src/image/TAMIL MANNVALAM.jpg" },
  { en: "SUBSIDY SCHEME", ta: "தள்ளுபடி திட்டம்", image: "src/image/SUBSIDY SCHEME.jpg" },
  { en: "BENEFIT REGISTRATION", ta: "நன்மை பதிவு", image: "src/image/BENEFIT REGISTRATION.jpg" },
  { en: "CROP INSURANCE", ta: "பயிர் காப்பீடு", image: "src/image/CROP INSURANCE.jpg" },
  { en: "FERTILIZER STOCK", ta: "உரம் பங்கு", image: "src/image/FERTILIZER STOCK.jpg" },
  { en: "SEED STOCK POSITION", ta: "விதை பங்கு நிலை", image: "src/image/SEED STOCK POSITION.jpg" },
  { en: "AGRICULTURE MACHINERY FOR RENTAL", ta: "வாடகைக்கு வேளாண் இயந்திரங்கள்", image: "src/image/AGRICULTURE MACHINERY FOR RENTAL.jpg" },
  { en: "MARKET PRICE", ta: "சந்தை விலை", image: "src/image/MARKET PRICE.jpg" },
  { en: "WEATHER ADVISORY", ta: "வானிலை அறிவிப்பு", image: "src/image/WEATHER ADVISORY.jpg" },
  { en: "FARMER OFFICER CONTACT PROGRAM", ta: "விவசாயி அதிகாரி தொடர்பு திட்டம்", image: "src/image/FARMER OFFICER CONTACT PROGRAM.jpg" },
  { en: "FARM GUIDE", ta: "பண்ணை வழிகாட்டி", image: "src/image/FARM GUIDE.jpg" },
  { en: "ORGANIC PRODUCTS", ta: "செயற்கை இல்லாத பொருட்கள்", image: "src/image/ORGANIC PRODUCTS.jpg" },
  { en: "FPO PRODUCTS", ta: "விவசாயிகள் உற்பத்தி அமைப்பு பொருட்கள்", image: "src/image/FPO PRODUCTS.jpg" },
  { en: "RESERVOIR LEVELS", ta: "அணை நீர்மட்டம்", image: "src/image/RESERVOIR LEVELS.jpg" },
  { en: "AGRICULTURE NEWS", ta: "வேளாண் செய்திகள்", image: "src/image/AGRICULTURE NEWS.jpg" },
  { en: "FEEDBACK", ta: "கருத்து", image: "src/image/FEEDBACK.jpg" },
  { en: "PEST/DISEASE MONITORING", ta: "பூச்சி/நோய் கண்காணிப்பு", image: "src/image/DISEASE MONITORING.jpg" },
  { en: "ATMA TRAINING AND DEMO", ta: "ஆத்மா பயிற்சி மற்றும் விளக்கம்", image: "src/image/ATMA TRAINING AND DEMO.jpg" },
  { en: "UZHAVAN E-MARKET", ta: "உழவன் மின்சந்தை", image: "src/image/UZHAVAN E-MARKET.jpg" },
  { en: "DEPARTMENT OF SERICULTURE", ta: "பட்டுப் பயிர் துறை", image: "src/image/DEPARTMENT OF SERICULTURE.jpg" },
  { en: "AGRI BUDGET", ta: "வேளாண் பட்ஜெட்", image: "src/image/AGRI BUDGET.jpg" },
  { en: "KALAIGNAR AGRICULTURE DEVELOPMENT PROGRAMME", ta: "கலைஞர் வேளாண் மேம்பாட்டு திட்டம்", image: "src/image/KALAIGNAR AGRICULTURE DEVELOPMENT PROGRAMME.jpg" },
  { en: "APPLYING FOR FELLING OF PALMYRA TREES", ta: "பனையமரம் வெட்ட விண்ணப்பம்", image: "src/image/APPLYING FOR FELLING OF PALMYRA TREES.jpg" },
  { en: "TN Green Mission Tree seedlings", ta: "தமிழ்நாடு பசுமை இயக்கம் மரக்கன்றுகள்", image: "src/image/TN Green Mission Tree seedlings.jpg" },
];

const HomePage = ({ language }) => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceName) => {
    // Navigate to a new page based on the service clicked
    if (serviceName === "TAMIL MANNVALAM") {
      window.open("http://tnagrisnet.tn.gov.in/mannvalam/soils_mob/en", "_blank");
    } else if (serviceName === "FMP MAP") {
      window.open("https://eservices.tn.gov.in/eservicesnew/land/chittaNewRuralFMBTamil.html?lan=ta&rno=uyd8jzPodJPzgc3VJuBHyKQtjuxk9duutzNaXbnacoPtAFZPkzAxILbMIoul9ZJIDkkPMUYLIW4LYlkHcynZzo0OppAJ7W2JNAP12CDRE29H14piQSy8IdQHJq45GQb38zR9ZtNzpJyrTOj0BsbZEJhhjiYCoVgd0lnluBknt13KRCHY1Her8qBLrc7fVf4CVts35uTllSyD3zUEHFZpMeEnB4ocotRGXHBI6jovCbUDy2px5ATcPZ8C5qqB9Gpe", "_blank");
    }else if (serviceName === "PATTA CHITTA") {
      window.open("https://eservices.tn.gov.in/eservicesnew/land/chittaNewRuralTamil.html?lan=ta&rno=BeYHZh3RxUsSKG2kBcWCproZKG9aNpfcPDGNOgqIBLHZvzmQEH765cCBnQev5Ra4X6u4ZtoIV5YvVCps80UU6aY0XW8qpdpjN8q17EbzLaVQsDWRJxmh6BcrfNFe47dlSi4N8tozajYpFhokjV0xZjY2PScXCgXKiJdn4bVzOvMnsYIbrT72nQzlkBSv9TE7MAKhX9n5EfXnaHq93ydh5HJgVQLhGrIhWYL96ZyPdI1Eoz5boKSo24YZ4HDLJtWy", "_blank");
    }else if (serviceName === "SUBSIDY SCHEME") {
      window.open("https://www.tnagrisnet.tn.gov.in/people_app/scheme/index/en/20/2020", "_blank");
    } else if (serviceName === "BENEFIT REGISTRATION") {
      // Open the official website link in a new tab
      window.open("https://www.tnagrisnet.tn.gov.in/people_app/register/index/en/20/2020", "_blank");
    } else if (serviceName === "CROP INSURANCE") {
      // Open the official website link in a new tab
      window.open("http://115.243.209.84/people_app/pmfby/index/en/20/2020", "_blank");
    } else if (serviceName === "FERTILIZER STOCK") {
      // Open the official website link in a new tab
      window.open("http://115.243.209.84/people_app/fertilizer/index/en/20/2020", "_blank");
    } else if (serviceName === "SEED STOCK POSITION") {
      // Open the official website link in a new tab
      window.open("https://www.tnagrisnet.tn.gov.in/people_app/seed/index/en/20/2020", "_blank");
    } else if (serviceName === "AGRICULTURE MACHINERY FOR RENTAL") {
      // Open the official website link in a new tab
      window.open("http://115.243.209.84/people_app/chc/index/en/20/2020", "_blank");
    } else if (serviceName === "MARKET PRICE") {
      // Open the official website link in a new tab
      window.open("http://115.243.209.84/people_app/market/index/en/20/2020", "_blank");
    } else if (serviceName === "WEATHER ADVISORY") {
      // Open the official weather advisory website link in a new tab
      window.open("http://115.243.209.84/people_app/tnau/index/en/20/2020", "_blank");
    } else if (serviceName === "FARMER OFFICER CONTACT PROGRAM") {
      // Open the official farmer officer contact program website link in a new tab
      window.open("https://www.tnagrisnet.tn.gov.in/people_app/Aao/index/en/20/2020", "_blank");
    } else if (serviceName === "FARM GUIDE") {
      // Navigate to Farm Guide page 
      window.open("https://www.tnagrisnet.tn.gov.in/people_app_demo/crop_plan/mobile_no/en/20/2020", "_blank");
    } else if (serviceName === "ORGANIC PRODUCTS") {
      // Navigate to Organic Products page
       window.open("http://115.243.209.84/people_app/organic/index/en/20/2020", "_blank");
    } else if (serviceName === "FPO PRODUCTS") {
      // Navigate to Organic Products page
       window.open("http://115.243.209.84/people_app/fpo/index/en/20/2020", "_blank");
    } else if (serviceName === "RESERVOIR LEVELS") {
      // Navigate to Organic Products page
       window.open("http://115.243.209.84/people_app/More/reservoir/en/20/2020", "_blank");
    } else if (serviceName === "AGRICULTURE NEWS") {
      // Navigate to Organic Products page
       window.open("https://www.tnagrisnet.tn.gov.in/people_app/message/index/20/20/2020", "_blank");
    } else if (serviceName === "FEEDBACK") {
      // Navigate to Organic Products page
       window.open("https://www.tnagrisnet.tn.gov.in/people_app/Feedback/index/en/20/2020", "_blank");
    } else if (serviceName === "PEST/DISEASE MONITORING") {
      // Navigate to Organic Products page
       window.open("https://www.tnagrisnet.tn.gov.in/people_app/login/mobile_no/en/0/0/pest", "_blank");
    } else if (serviceName === "ATMA TRAINING AND DEMO") {
      // Navigate to Organic Products page
       window.open("https://www.tnagrisnet.tn.gov.in/people_app/login/mobile_no/en/0/0/atma", "_blank");
    } else if (serviceName === "UZHAVAN E-MARKET") {
      // Navigate to Organic Products page
       window.open("http://115.243.209.84/people_app/sericulture/index/en/0/0/sericulture", "_blank");
    } else if (serviceName === "DEPARTMENT OF SERICULTURE") {
      // Navigate to Organic Products page
       window.open("http://115.243.209.84/people_app/sericulture/index/en/0/0/sericulture", "_blank");
    } else if (serviceName === "AGRI BUDGET") {
      // Navigate to Organic Products page
       window.open("https://www.tnagrisnet.tn.gov.in/people_app/budget", "_blank");
    }else if (serviceName === "DKALAIGNAR AGRICULTURE DEVELOPMENT PROGRAMME") {
      // Navigate to Organic Products page
       window.open("https://www.tnagrisnet.tn.gov.in/fcms/aaoVisit/#/farmer/cluster", "_blank");
    }else if (serviceName === "APPLYING FOR FELLING OF PALMYRA TREES") {
      // Navigate to Organic Products page
       window.open("http://tnagriculture.in/pmd/public/#login", "_blank");
    }else if (serviceName === "TN Green Mission Tree seedlings") {
      // Navigate to Organic Products page
       window.open("https://www.tnagrisnet.tn.gov.in/people_app/forest/index/en", "_blank");
    }else {
      // For other services, open in new tab
      const url = serviceName.toLowerCase().replace(/\s+/g, '-');
      window.open(`/service/${url}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 pt-20">
      {/* Marquee Announcement */}
      <div className="overflow-hidden bg-white rounded-lg shadow-md p-4 mb-6 max-w-7xl mx-auto">
        <marquee
          className="text-red-700 font-semibold"
          behavior="scroll"
          direction="left"
          scrollAmount="5"
        >
          {language === "en"
            ? "Kuruvai Cultivation Special Scheme - 2024 - 25"
            : "குருவை சாகுபடி சிறப்புத் திட்டம் - 2024 - 25"}
        </marquee>
      </div>

      {/* Service Cards */}
      <main className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-pink-200 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => handleServiceClick(service.en)}
            >
              <img
                src={service.image}
                alt={service[language]}
                className="w-24 h-24 object-cover mb-2 rounded-full border-2 border-red-700"
              />
              <span className="text-center font-semibold text-sm">
                {service[language]}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
