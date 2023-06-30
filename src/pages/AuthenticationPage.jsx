import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import NavigationButton from "../components/NavigationButton.jsx"
import "../index.css"
import SmallInputField from '../components/SmallInputField.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import PhoneImage from "../images/grey_smartphone.jpg";

const AuthenticationPage = ({linkFrom, linkTo, completedTasks, totalTasks}) => {
    const navigate = useNavigate();


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ProgressBar totalTasks={totalTasks} completedTasks={completedTasks} />
      <div className="w-full px-10 flex flex-col items-center">
        <div className="flex items-center justify-center">
          <img className="pb-5" src={PhoneImage} width="250px" alt="Grey Smartphone" />
        </div>
        <h1 className="text-center">Skriv inn engangskode fra sms</h1>
        <div className="mb-14 mt-2 flex items-center justify-center space-x-2">
          <SmallInputField placeholder="0" pattern="[0-9]" />
          <SmallInputField placeholder="0" pattern="[0-9]" />
          <SmallInputField placeholder="0" pattern="[0-9]" />
          <SmallInputField placeholder="0" pattern="[0-9]" />
          <SmallInputField placeholder="0" pattern="[0-9]" />
        </div>
      </div>
      <div className={"absolute m-10 w-full px-10 bottom-0"}>

          <NavigationButton onClick={() => navigate(linkTo)}/>
          <NavigationButton text={"Avbryt"} onClick={() => navigate(linkFrom)}/>
        </div>
    </div>
  );
};
export default AuthenticationPage;