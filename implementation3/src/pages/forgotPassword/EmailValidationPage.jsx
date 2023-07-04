import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import '../../index.css';
import ProgressBar from '../../components/ProgressBar.jsx';
import MailImage from '../../images/envelope.png';
import NavigationButton from '../../components/NavigationButton';
import {useTranslation} from "react-i18next";

const EmailValidationPage = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');

  const inputRefs = useRef([]);

  const handleInputChange = (index, event) => {
    const inputValue = event.target.value;

    if (inputValue.length > 1) {
      event.target.value = inputValue.slice(0, 1); // Keep only the first character
    }

    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
    setErrorMessage('');

    if (inputValue.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus(); // Move focus to the next input
    }
  };

  const handleNextClick = () => {
    const isAnyFieldEmpty = inputValues.some((value) => value === '');
    if (isAnyFieldEmpty) {
      setErrorMessage('Feil kode inntastet');
      return;
    }
    navigate("/resetPassword");
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && event.target.value === '') {
      if (index > 0) {
        inputRefs.current[index - 1].focus(); // Move focus to the previous input
      }
    }
  };
   
  return (
    <div className="flex flex-col items-center h-screen">
      <ProgressBar totalTasks={5} completedTasks={4} />
      <h1 className="text-3xl font-bold mb-12">{t('emailcode')}</h1>
      <div className="w-full px-10 flex flex-col items-center">
        <div className="flex items-center">
          <img className="pb-16" src={MailImage} width="150px" alt="Envelope" />
        </div>
        <h1 className="absolute bottom-96 left-32">{t('enterActivationCodeByEmail')}</h1>
        <div className="mb-32 mt-2 flex items-center space-x-2">
        <input
            ref={(ref) => inputRefs.current[0] = ref} // Store the input reference in inputRefs.current[0]
            placeholder="0"
            pattern="[a-zA-Z0-9]" 
            maxLength={1}
            autoFocus={true}
            onChange={(event) => handleInputChange(0, event)}
            onKeyDown={(event) => handleKeyDown(0, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-custom-lightgrey border-2 text-center"
          />
          {/* Repeat the above pattern for the remaining inputs (1, 2, 3, 4) */}
          <input
            ref={(ref) => inputRefs.current[1] = ref}
            placeholder="0"
            pattern="[a-zA-Z0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(1, event)}
            onKeyDown={(event) => handleKeyDown(1, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-custom-lightgrey border-2 text-center"
          />
          <input
            ref={(ref) => inputRefs.current[2] = ref}
            placeholder="0"
            pattern="[a-zA-Z0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(2, event)}
            onKeyDown={(event) => handleKeyDown(2, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-custom-lightgrey border-2 text-center"
          />
          <input
            ref={(ref) => inputRefs.current[3] = ref}
            placeholder="0"
            pattern="[a-zA-Z0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(3, event)}
            onKeyDown={(event) => handleKeyDown(3, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-custom-lightgrey border-2 text-center"
          />
          <input
            ref={(ref) => inputRefs.current[4] = ref}
            placeholder="0"
            pattern="[a-zA-Z0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(4, event)}
            onKeyDown={(event) => handleKeyDown(4, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-custom-lightgrey border-2 text-center"
          />
           <input
            ref={(ref) => inputRefs.current[5] = ref}
            placeholder="0"
            pattern="[a-zA-Z0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(5, event)}
            onKeyDown={(event) => handleKeyDown(5, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-custom-lightgrey border-2 text-center"
          />
        </div>
        <p className={"my-2 text-red-700 absolute bottom-1/3 left-32"}>{errorMessage && <p> {errorMessage}</p >}</p>
      </div>
      <div className={"absolute w-7/12 bottom-32 text-center right-0 "}>
        <NavigationButton onClick={handleNextClick} />
      </div>

      <div className={"absolute w-7/12 bottom-8 text-center left-0 "}>
        <NavigationButton text={t('cancel')} onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default EmailValidationPage;
