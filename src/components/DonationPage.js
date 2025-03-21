import React from 'react';
import { Heart, Smartphone, Book, BookOpen, HandHeart, Globe, DollarSign, Phone, Mail, MapPin, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Log: Updated Header component to display a full-width banner image with an auto height.
const Header = () => (
  <div className="bg-[#0b0e10] pt-8">
    <header className="bg-[#0b0e10] mb-12 flex justify-center items-center">
      <img src="/images/donationBanner.png" alt="Donation Banner" className="w-3/5 h-auto" />
    </header>
  </div>
);

const SupportSection = () => (
  <div className="max-w-3xl mx-auto mb-8 text-center px-5">
    <h1 className="text-3xl md:text-4xl text-gray-800 mb-4 font-semibold leading-tight">
      Support Thafheem ul Quran
    </h1>
    <p className="text-gray-600">
      Join us in spreading the understanding of Allah's words through your generous contribution
    </p>
  </div>
);

const QuoteCard = () => {
  const translations = [
    { text: "Who is it that will give Allah a beautiful loan? A loan that Allah will repay after increasing it many times and grant him a generous reward.", className: "text-lg italic text-gray-700", dir: "ltr" },
    { text: "അല്ലാഹുവിന് കടം കൊടുക്കുന്നവരാരുണ്ട്? വിശിഷ്ടമായ കടം; അല്ലാഹു അത് പലയിരട്ടി വര്‍ധിപ്പിച്ചു തിരിച്ചേകാന്‍. അപ്രകാരം കടം കൊടുക്കുന്നവന്ന് ശ്രേഷ്ഠമായ പ്രതിഫലവുമുണ്ട്.", className: "text-lg text-gray-700 font-malayalam", dir: "ltr" },
    { text: "کون ہے جو اللہ کو قرض دے؟ اچھا قرض، تاکہ اللہ اسے کئی گُنا بڑھا کر واپس دے، اور اُس کے لیے بہترین اجر ہے .", className: "text-lg text-gray-700 font-urdu", dir: "rtl" },
    { text: "அல்லாஹ்விற்குக் கடன் கொடுப்பவர் யார்? அழகிய கடன்! அல்லாஹ் அதனைப் பன்மடங்கு பெருக்கி அவருக்குத் திரும்பக் கொடுப்பதற்காக! மேலும், அவருக்கு மிகச் சிறந்த கூலியும் இருக்கின்றது.", className: "text-lg text-gray-700 font-tamil", dir: "ltr" },
    { text: "এমন কেউ কি আছে যে আল্লাহকে ঋণ দিতে পারে? উত্তম ঋণ যাতে আল্লাহ‌ তা কয়েকগুণ বৃদ্ধি করে ফেরত দেন। আর সেদিন তার জন্য রয়েছে সর্বোত্তম প্রতিদান১৬", className: "text-lg text-gray-700 font-bengali", dir: "ltr" }
  ];
  
  const arabicText = "مَن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ وَلَهُ أَجْرٌ كَرِيمٌ";
  
  const [currentTranslation, setCurrentTranslation] = React.useState(0);
  
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTranslation(prev => (prev + 1) % translations.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [translations.length]);
  
  return (
    <div className="bg-white p-8 rounded-lg text-center mx-auto max-w-3xl mb-8 shadow-sm">
      <p className="text-3xl mb-6 leading-relaxed font-arabic" dir="rtl">
        {arabicText}
      </p>
      <p className={`${translations[currentTranslation].className} mb-6`} dir={translations[currentTranslation].dir}>
        {translations[currentTranslation].text}
      </p>
      <span className="text-[#289bb9] text-sm">- Surah Al-Hadid 57:11</span>
    </div>
  );
};

const DonateButton = () => (
  <div className="text-center">
    <a
      href="https://rzp.io/rzp/thafheem-donation"
      className="inline-flex items-center gap-2 bg-[#289bb9] text-white px-10 py-3 rounded-md font-medium text-lg hover:bg-[#248ca7] transition-all shadow-md hover:-translate-y-0.5"
    >
      <Heart size={20} />
      Donate Now
    </a>
  </div>
);

const BenefitCard = ({ icon: Icon, title, description, translations }) => {
  const hasTranslations = translations && translations.length > 0;
  const [currentTranslation, setCurrentTranslation] = React.useState(0);

  React.useEffect(() => {
    let intervalId;
    if (hasTranslations) {
      intervalId = setInterval(() => {
        setCurrentTranslation(prev => (prev + 1) % translations.length);
      }, 5000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [hasTranslations, translations]);

  const displayedContent = hasTranslations ? (
    <p className={translations[currentTranslation].className} dir={translations[currentTranslation].dir}>
      {translations[currentTranslation].text}
    </p>
  ) : (
    <p className="text-gray-600 text-sm">{description}</p>
  );

  return (
    <div className="bg-white p-8 rounded-lg text-center shadow-sm">
      <div className="text-blue-500 mb-4">
        <Icon size={24} className="mx-auto" />
      </div>
      <h3 className="text-gray-800 mb-2 font-medium text-lg">{title}</h3>
      {displayedContent}
    </div>
  );
};

const Benefits = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-5 my-12">
    <BenefitCard
      icon={() => <img src="/images/quran_icon.png" alt="Quran Icon" className="mx-auto" style={{ height: '36px', width: '36px' }} />}
      title="Divine Guidance"
      translations={[
         { text: "This Quran shows you the straightest path.", className: "text-gray-600 text-sm", dir: "ltr" },
         { text: "ഈ ഖുര്‍ആന്‍ ഏറ്റവും നേരായ വഴി കാണിച്ചുതരുന്നു. ( 17 : 9 )", className: "text-gray-600 text-sm font-malayalam", dir: "ltr" },
         { text: "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ", className: "text-gray-600 text-sm font-arabic", dir: "rtl" }
      ]}
    />
    <BenefitCard
      icon={() => <img src="/images/S_A_W_icon.png" alt="Quran Icon" className="mx-auto" style={{ height: '36px', width: '36px' }} />}
      title="Learn & Teach"
      translations={[
         { text: "The Prophet (peace be upon him) said: 'The best among you is the one who learns the Quran and teaches it.'", className: "text-gray-600 text-sm", dir: "ltr" },
         { text: "നബി (സ) പറഞ്ഞു: 'നിങ്ങളിൽ ഉത്തമൻ, ഖുർആൻ പഠിക്കുകയും അത് പഠിപ്പിക്കുകയും ചെയ്യുന്നവനാണ്'.", className: "text-gray-600 text-sm font-malayalam", dir: "ltr" },
         { text: "رسول اللہ صلی اللہ علیہ وسلم نے فرمایا: تم میں سے بہترین وہ ہے جو قرآن سیکھے اور سکھائے۔", className: "text-gray-600 text-sm font-urdu", dir: "rtl" }
      ]}
    />
    <BenefitCard
      icon={() => <img src="/images/donate_icon.png" alt="Quran Icon" className="mx-auto" style={{ height: '36px', width: '36px' }} />}
      title="Support Through Sadaqah"
      translations={[
         { text: "Support this great initiative of making the Quran available to the general public by giving a portion of your Zakat and Sadaqah.", className: "text-gray-600 text-sm", dir: "ltr" },
         { text: "ഖുർആനിനെ  പൊതു സമൂഹത്തിന് ലഭ്യമാക്കുന്ന ഈ മഹദ് സംരഭത്തെ നിങ്ങളുടെ സകാത്-സ്വദഖകളില്‍ നിന്ന് ഒരു വിഹിതം നൽകി സഹായിക്കുക..", className: "text-gray-600 text-sm font-malayalam", dir: "ltr" },
         { text: "براہِ کرم اپنی زکوٰۃ اور صدقات میں سے کچھ حصہ دے کر عوام الناس کے لیے قرآن مجید کو عام کرنے کے اس عظیم اقدام کی حمایت کریں۔", className: "text-gray-600 text-sm font-urdu", dir: "rtl" }
      ]}
    />
  </div>
);

const AppDownload = () => (
  <div className="text-center py-12 bg-white mt-12">
    <h2 className="text-2xl md:text-3xl text-gray-800 mb-2">Download Our App</h2>
    <p className="text-gray-600 mb-8">Experience Thafheem ul Quran on your mobile device</p>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <a
        href="https://play.google.com/store/apps/details?id=com.d4media.thafheem"
        className="inline-flex items-center gap-3  text-white px-2 py-2 rounded-lg hover:bg-gray-200 transition-all mx-auto md:mx-2"
      >
        <img src="/images/google-play-badge.png" alt="Get it on Google Play" className="w-40" />
      </a>
      <a
        href="https://apps.apple.com/in/app/thafheem-ul-quran/id1292572556"
        className="inline-flex items-center gap-3 text-white px-2 py-2 rounded-lg hover:bg-gray-200 transition-all mx-auto md:mx-2"
      >
        <img src="/images/app-store-badge.png" alt="Download on the App Store" className="w-40" />
      </a>
    </div>
  </div>
);

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  return (
    <>
      <footer className="bg-[#289bb9] text-white py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2024 Thafheem ul Quran. All rights reserved.</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="https://merchant.razorpay.com/policy/PV2XAkNJXKVU7X" className="opacity-80 hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="https://merchant.razorpay.com/policy/PV2XAkNJXKVU7X/privacy" className="opacity-80 hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
            <button 
              onClick={() => setIsContactOpen(true)} 
              className="opacity-80 hover:opacity-100 transition-opacity text-left"
            >
              Contact Us
            </button>
          </div>
        </div>
      </footer>
      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

const ContactDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl w-full max-w-2xl shadow-xl relative overflow-hidden">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Title Section */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4">
              <img src="/images/logo.png" alt="Thafheem Logo" className="w-full h-full object-cover rounded-xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions about Thafheem ul Quran? We're here to help!
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            {/* Phone */}
            <div className="transform transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center space-x-6 bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#57b8d0]" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm mb-1">Phone</h3>
                  <a href="tel:+919946666139" className="text-gray-900 text-lg hover:text-[#57b8d0] transition-colors">
                    +91 99466 66139
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="transform transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center space-x-6 bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#57b8d0]" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm mb-1">Email</h3>
                  <a href="mailto:info@d4media.in" className="text-gray-900 text-lg hover:text-[#57b8d0] transition-colors">
                    info@d4media.in
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="transform transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center space-x-6 bg-white p-6 rounded-xl shadow-sm border border-blue-50">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#57b8d0]" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm mb-1">Address</h3>
                  <p className="text-gray-900 text-lg">
                    D4media, Hira Centre, Calicut, Kerala, Pin 673004
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SupportSection />
      <QuoteCard />
      <DonateButton />
      <Benefits />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default App;