import React from 'react';
import { Link } from 'react-router-dom';
import NextButton from "../components/NextButton.jsx"
import "../index.css"
import InputField from '../components/Input.jsx';


const AuthenticationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Skriv inn engangskode</h1>
      <InputField placeholder={"4 tall"}/>
      <NextButton>
      <Link to="/contactInfo">Neste</Link>
      </NextButton>
     
    </div>
  );
};

export default AuthenticationPage;