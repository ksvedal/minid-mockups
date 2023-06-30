import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';


// State to manage the menu visibility and selected language
const LanguageButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('NO');
  

// Array of available languages
  const languages = ['Bokmål', 'Nynorsk','English',  'Sámegiella'];

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
     <div className="dark:text-white border-b-2 font-bold text-gray-800 py-2 px-9 cursor-pointer" onClick={handleMenuToggle}>
      <span className=' '>{selectedLanguage}  </span>
      <div className="inline-block">
        <FontAwesomeIcon icon={faArrowRight}
        className={`transform ${isMenuOpen ? 'rotate-90' : ''} transition-transform duration-200`} />
      </div>
    </div>
      {isMenuOpen && (
        <div>
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
