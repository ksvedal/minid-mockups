import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

// State to manage the menu visibility and selected language
const LanguageButton = () => {
    const { t, i18n } = useTranslation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('NO');

    const changeLanguageHandler = (languageCode) => {
        i18n.changeLanguage(languageCode);
    }

    // Array of available languages
    const languageMapping = {
        'Bokmål': 'no',
        'Nynorsk': 'nn',
        'English': 'en',
        'Sámegiella': 'smi',
    };

    // Function to toggle the menu visibility
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLanguageSelect = (language) => {
        const languageCode = languageMapping[language];
        changeLanguageHandler(languageCode);
        setSelectedLanguage(language);
        setIsMenuOpen(false);
    };

    return (
      <div>
       <div className="dark:text-white font-bold text-gray-800 py-2 px-9 cursor-pointer" onClick={handleMenuToggle}>
        <span className=' '>{selectedLanguage}  </span>
        <div className="inline-block">
          <FontAwesomeIcon icon={faArrowRight}
          className={`transform ${isMenuOpen ? 'rotate-90' : ''} transition-transform duration-200`} />
        </div>
      </div>
          {isMenuOpen && (
              <div>
                  {Object.keys(languageMapping).map((language) => (
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
