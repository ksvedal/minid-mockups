import React from 'react';
import { Link } from 'react-router-dom';
import NextButton from "../components/NextButton.jsx"
import "../index.css"
import SmallInputField from '../components/SmallInputField.jsx';
import BackButton from '../components/BackButton.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import PhoneImage from "../images/grey_smartphone.jpg";

const AuthenticationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ProgressBar totalTasks={3} completedTasks={3} />
        <div className={"absolute m-10 w-full px-10 bottom-0"}>
        <img className='py-3 w-full' src={PhoneImage} width="70px" alt="Grey Smartphone" />

      <h1 className={"text-center"}>Skriv inn engangskode fra sms</h1>
      <div className="flex items-center justify-center space-x-2 m-2">
        <SmallInputField placeholder={"0"} pattern={"[0-9]"} />
        <SmallInputField placeholder={"0"} pattern={"[0-9]"} />
        <SmallInputField placeholder={"0"} pattern={"[0-9]"} />
        <SmallInputField placeholder={"0"} pattern={"[0-9]"} />
        <SmallInputField placeholder={"0"} pattern={"[0-9]"} />
      </div>

            <Link to="/contactInfo"> <NextButton /> </Link>
            <Link to="/password"> <BackButton /> </Link>
        </div>
    </div>
  );
};

export default AuthenticationPage;