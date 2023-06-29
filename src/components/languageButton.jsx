import React, { useState } from 'react';

// State to manage the menu visibility and selected language
const LanguageButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

// Array of available languages
  const languages = ['English', 'Spanish', 'French', 'German', 'Italian'];

  // Function to toggle the menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsMenuOpen(false);
    
    // Perform any additional actions when a language is selected
  };

  return (
    <div>
      <div className="bg-red-300 border-yellow-600"   onClick={handleMenuToggle}>
        Språk: {selectedLanguage || 'Choose language'}
      </div>
      {isMenuOpen && (
        <div className="bg-yellow-300">
          {languages.map((language) => (
            <div
              key={language}
              onClick={() => handleLanguageSelect(language)}
            >
              {language}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageButton;
