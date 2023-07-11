import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButton from '../components/navigationButton.jsx';
import '../index.css';
import Mountains from '../components/Icons/mountains.jsx';
import ProgressBar from '../components/progressBar.jsx';
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

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && event.target.value === '') {
      if (index > 0) {
        inputRefs.current[index - 1].focus(); // Move focus to the previous input
      }
    }
  };
   
  return (
    <div className="flex flex-col items-center h-screen text-custom-black dark:text-custom-white">
      <ProgressBar totalTasks={totalTasks} completedTasks={completedTasks} />
      <h1 className="absolute top-52 text-3xl font-bold">{t('smscode')}</h1>
      <div className="w-full flex flex-col items-center">
        <div className="flex items-center">
          <img className="pb-16 mt-28" src={PhoneImage} width="250px" alt="Grey Smartphone" />
        </div>

        <h1 className={`my-2 ${errorMessage ? 'text-custom-red' : 'text-custom-black dark:text-custom-white'} absolute bottom-96`}> 
        {errorMessage ? errorMessage : t('enterAuthenticationCode')}
        </h1>
        
        <div className=''>
        <div className=" mb-28 mt-2 flex items-center space-x-2">
          <input
            ref={(ref) => inputRefs.current[0] = ref} // Store the input reference in inputRefs.current[0]
            placeholder="0"
            pattern="[a-zA-Z0-9]" 
            maxLength={1}
            autoFocus={true}
            onChange={(event) => handleInputChange(0, event)}
            onKeyDown={(event) => handleKeyDown(0, event)}
<<<<<<< HEAD
            className={`py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-2 text-center dark:bg-black dark:text-white 
            ${errorMessage ? 'border-custom-red' : 'border-custom-lightgrey'}`}
=======
            className={`py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-2 text-center dark:bg-black dark:text-white dark:border-black 
            ${errorMessage ? 'border-custom-red dark:border-custom-red' : 'border-custom-lightgrey'}`}
>>>>>>> d954c8247d77645261c60274e0ddd69dc1ef9e5d
          />
          {/* Repeat the above pattern for the remaining inputs (1, 2, 3, 4) */}
          <input
            ref={(ref) => inputRefs.current[1] = ref}
            placeholder="0"
            pattern="[a-zA-Z0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(1, event)}
            onKeyDown={(event) => handleKeyDown(1, event)}
<<<<<<< HEAD
            className={`py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-2 text-center dark:bg-black dark:text-white  
            ${errorMessage ? 'border-custom-red' : 'border-custom-lightgrey'}`}
=======
            className={`py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-2 text-center dark:bg-black dark:text-white dark:border-black  
            ${errorMessage ? 'border-custom-red dark:border-custom-red' : 'border-custom-lightgrey'}`}
>>>>>>> d954c8247d77645261c60274e0ddd69dc1ef9e5d
          />
          <input
            ref={(ref) => inputRefs.current[2] = ref}
            placeholder="0"
            pattern="[a-zA-Z0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(2, event)}
            onKeyDown={(event) => handleKeyDown(2, event)}
<<<<<<< HEAD
            className={`py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-2 text-center dark:bg-black dark:text-white 
            ${errorMessage ? 'border-custom-red' : 'border-custom-lightgrey'}`}
=======
            className={`py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-2 text-center dark:bg-black dark:text-white dark:border-black 
            ${errorMessage ? 'border-custom-red dark:border-custom-red' : 'border-custom-lightgrey'}`}
>>>>>>> d954c8247d77645261c60274e0ddd69dc1ef9e5d
          />
          <input
            ref={(ref) => inputRefs.current[3] = ref}
            placeholder="0"
            pattern="[a-zA-Z0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(3, event)}
            onKeyDown={(event) => handleKeyDown(3, event)}
<<<<<<< HEAD
            className={`py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-2 text-center dark:bg-black dark:text-white 
            ${errorMessage ? 'border-custom-red' : 'border-custom-lightgrey'}`}
=======
            className={`py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-2 text-center dark:bg-black dark:text-white dark:border-black 
            ${errorMessage ? 'border-custom-red dark:border-custom-red' : 'border-custom-lightgrey'}`}
>>>>>>> d954c8247d77645261c60274e0ddd69dc1ef9e5d
          />
          <input
            ref={(ref) => inputRefs.current[4] = ref}
            placeholder="0"
            pattern="[a-zA-Z0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(4, event)}
            onKeyDown={(event) => handleKeyDown(4, event)}
<<<<<<< HEAD
            className={`py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-2 text-center dark:bg-black dark:text-white  
            ${errorMessage ? 'border-custom-red' : 'border-custom-lightgrey'}`}
=======
            className={`py-6 mb-4 w-11 h-11 bg-custom-white text-custom-black border-2 text-center dark:bg-black dark:text-white  dark:border-black 
            ${errorMessage ? 'border-custom-red dark:border-custom-red' : 'border-custom-lightgrey'}`}
>>>>>>> d954c8247d77645261c60274e0ddd69dc1ef9e5d
          />
        </div>
        </div>
       {/*  <p className={"my-2 text-red-700 absolute bottom-1/3 left-36"}>{errorMessage && <p> {errorMessage}</p >}</p> */}
      </div>

      <Mountains />

      <NavigationButton position={'right'} onClick={handleNextClick} />
      <NavigationButton position={'left'} text={t('cancel')} onClick={() => navigate(linkFrom)} />

    </div>
  );
};

export default AuthenticationPage;
