import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import ProgressBar from '../../components/ProgressBar.jsx';
import MailImage from '../../images/envelope.png';
import NavigationButton from '../../components/NavigationButton';

const EmailValidationPage = () => {
  const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleInputChange = (index, event) => {
    const inputValue = event.target.value;

    if (inputValue.length > 1) {
      event.target.value = inputValue.slice(0, 1); // Keep only the first character
    }

    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);

    if (inputValue.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus(); // Move focus to the next input
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ProgressBar totalTasks={5} completedTasks={4} />
      <div className="w-full px-10 flex flex-col items-center">
        <div className="flex items-center justify-center">
          <img className="pb-16" src={MailImage} width="150px" alt="Envelope" />
        </div>
        <h1 className="text-center">Skriv inn engangskode fra epost</h1>
        <div className="mb-3 mt-2 flex items-center justify-center space-x-2">
          <input
            ref={(ref) => (inputRefs.current[0] = ref)}
            placeholder="0"
            pattern="[0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(0, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"
          />
          {/* Repeat the above pattern for the remaining inputs (1, 2, 3, 4, 5) */}
          <input
            ref={(ref) => (inputRefs.current[1] = ref)}
            placeholder="0"
            pattern="[0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(1, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"
          />
          <input
            ref={(ref) => (inputRefs.current[2] = ref)}
            placeholder="0"
            pattern="[0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(2, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"
          />
          <input
            ref={(ref) => (inputRefs.current[3] = ref)}
            placeholder="0"
            pattern="[0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(3, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"
          />
          <input
            ref={(ref) => (inputRefs.current[4] = ref)}
            placeholder="0"
            pattern="[0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(4, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"
          />
          <input
            ref={(ref) => (inputRefs.current[5] = ref)}
            placeholder="0"
            pattern="[0-9]"
            maxLength={1}
            onChange={(event) => handleInputChange(5, event)}
            className="py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"
          />
        </div>
      </div>
      <div className="absolute m-10 w-1/2 px-10 bottom-0">
        <Link to="/resetPassword">
          <NavigationButton />
        </Link>
        <Link to="/.">
          <NavigationButton text="Avbryt" />
        </Link>
      </div>
    </div>
  );
};

export default EmailValidationPage;
