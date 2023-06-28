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
      <img className='py-3' src={PhoneImage} width="70px" alt="Grey Smartphone" />
      <h1>Skriv inn engangskode fra sms</h1>
      <div className="flex items-center justify-center space-x-2">
        <SmallInputField placeholder={"1"} pattern={"[0-9]"} />
        <SmallInputField placeholder={"2"} pattern={"[0-9]"} />
        <SmallInputField placeholder={"3"} pattern={"[0-9]"} />
        <SmallInputField placeholder={"4"} pattern={"[0-9]"} />
        <SmallInputField placeholder={"5"} pattern={"[0-9]"} />
      </div>
      <NextButton>
        <Link to="/contactInfo">Neste</Link>
      </NextButton>
      <BackButton>
      <Link to="/password">Tilbake</Link>
      </BackButton>
    </div>
  );
};

export default AuthenticationPage;