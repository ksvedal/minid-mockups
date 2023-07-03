import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import NavigationButton from "../components/NavigationButton.jsx"
import "../index.css"
import ProgressBar from '../components/ProgressBar.jsx';
import PhoneImage from "../images/grey_smartphone.jpg";

const AuthenticationPage = ({linkFrom, linkTo, completedTasks, totalTasks}) => {
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState(["","","","",""]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (index, value) => {
      const newInputValues = [...inputValues];
      newInputValues[index] = value;
      setInputValues(newInputValues);
      setErrorMessage("");
    };

    const handleNextClick = () => {
      const isAnyFieldEmpty = inputValues.some((value) => value === "");
      if (isAnyFieldEmpty) {
        setErrorMessage("Feil kode inntastet");
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
        <h1 className="text-center">Skriv inn engangskode fra sms</h1>
        <div className="mb-14 mt-2 flex items-center justify-center space-x-2">
          <input placeholder="0" pattern="[a-zA-Z0-9]" onChange={(value) => handleInputChange(0, value)} 
          className={"py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"}/>
          <input placeholder="0" pattern="[a-zA-Z0-9]" onChange={(value) => handleInputChange(1, value)} 
          className={"py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"}/>
          <input placeholder="0" pattern="[a-zA-Z0-9]" onChange={(value) => handleInputChange(2, value)}
          className={"py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"} />
          <input placeholder="0" pattern="[a-zA-Z0-9]" onChange={(value) => handleInputChange(3, value)}
          className={"py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"} />
          <input placeholder="0" pattern="[a-zA-Z0-9]" onChange={(value) => handleInputChange(4, value)}
          className={"py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"} />
        </div>
        {errorMessage && <p className="text-red-700">{errorMessage}</p>}
      </div>
      <div className={"absolute m-10 w-1/2 px-10 bottom-0"}>
        <NavigationButton onClick={handleNextClick}/>
        <NavigationButton text={"Avbryt"} onClick={() => navigate(linkFrom)}/>
      </div>
    </div>
  );
};
export default AuthenticationPage;