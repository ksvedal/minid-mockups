import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButton from '../components/NavigationButton.jsx';
import '../index.css';
import ProgressBar from '../components/ProgressBar.jsx';
import PhoneImage from "../images/grey_smartphone.jpg";
import {useTranslation} from "react-i18next";

const AuthenticationPage = ({linkFrom, linkTo, completedTasks, totalTasks}) => {
    const {t} = useTranslation()
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState(['', '', '', '', '']);
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
      setErrorMessage(t('wrongAuthenticationCodeEntered'));
      return;
    }
    navigate(linkTo);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ProgressBar totalTasks={totalTasks} completedTasks={completedTasks} />
      <div className="w-full px-10 flex flex-col items-center">
        <div className="flex items-center justify-center">
          <img className="pb-5" src={PhoneImage} width="250px" alt="Grey Smartphone" />
        </div>
        <h1 className="text-center">{t('enterAuthenticationCode')}</h1>
        <div className="mb-14 mt-2 flex items-center justify-center space-x-2">
          <input
            ref={(ref) => inputRefs.current[0] = ref} // Store the input reference in inputRefs.current[0]
            placeholder="0"
            pattern="[0-9]" // Accept digits only
            maxLength={1}
            onChange={(event) => handleInputChange(0, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"
          />
          {/* Repeat the above pattern for the remaining inputs (1, 2, 3, 4) */}
          <input
            ref={(ref) => inputRefs.current[1] = ref}
            placeholder="0"
            pattern="[0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(1, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"
          />
          <input
            ref={(ref) => inputRefs.current[2] = ref}
            placeholder="0"
            pattern="[0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(2, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"
          />
          <input
            ref={(ref) => inputRefs.current[3] = ref}
            placeholder="0"
            pattern="[0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(3, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"
          />
          <input
            ref={(ref) => inputRefs.current[4] = ref}
            placeholder="0"
            pattern="[0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(4, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"
          />
        </div>
        <p className={"my-2 text-red-700 absolute top-40"}>{errorMessage && <p> {errorMessage}</p >}</p>
      </div>
      <div className="absolute m-10 w-1/2 px-10 bottom-0">
        <NavigationButton onClick={handleNextClick} />
        <NavigationButton text={t('cancel')} onClick={() => navigate(linkFrom)} />
      </div>
    </div>
  );
};

export default AuthenticationPage;
