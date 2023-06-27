import React from 'react';
import { Link } from 'react-router-dom';
import NextButton from "../components/NextButton.jsx"
import "../index.css"
import SmallInputField from '../components/SmallInputField.jsx';

/*
const AuthenticationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Skriv inn engangskode fra sms</h1>
      <InputField placeholder={"4 tall"} pattern={"[0-9]+"} />
      <NextButton>
      <Link to="/contactInfo">Neste</Link>
      </NextButton>
     
    </div>
  );
};
*/
const AuthenticationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img className='py-3' src="/images/grey_smartphone.jpg" width="100px" alt="Grey Smartphone" />
      <h1>Skriv inn engangskode fra sms</h1>
      <div className="flex items-center justify-center space-x-2">
        <SmallInputField placeholder={"1"} pattern={"[0-9]"} />
        <SmallInputField placeholder={"2"} pattern={"[0-9]"} />
        <SmallInputField placeholder={"3"} pattern={"[0-9]"} />
        <SmallInputField placeholder={"4"} pattern={"[0-9]"} />
      </div>
      <NextButton>
        <Link to="/contactInfo">Neste</Link>
      </NextButton>
    </div>
  );
};

export default AuthenticationPage;