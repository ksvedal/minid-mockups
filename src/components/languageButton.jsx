import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


// State to manage the menu visibility and selected language
const LanguageButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

// Array of available languages
  const languages = ['English', 'Norsk Bokmål', 'Norsk Nynorsk', 'Sámegiella'];

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
    <div className=" bg-gray-200 rounded-md">
     <div className="font-bold text-gray-800 py-2 px-9 rounded-full cursor-pointer" onClick={handleMenuToggle}>
      Språk {selectedLanguage}
      <div className="transition-transform transform hover:rotate-90 inline-block">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
      {isMenuOpen && (
        <div className=" flex justify-center items-center cursor-pointer flex-col ">
          {languages.map((language) => (
            <div className="hover:font-bold"
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
