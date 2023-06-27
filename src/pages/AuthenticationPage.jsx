import React from 'react';
import { Link } from 'react-router-dom';
import NextButton from "../components/NextButton.jsx"
import "../index.css"
import InputField from '../components/Input.jsx';


const AuthenticationPage = () => {
  return (
    <div>
      <h1>AuthenticationPage</h1>
      <p>skriv inn engangskode</p>
      <InputField />
      <NextButton>
      <Link to="/contactInfo">Neste</Link>
      </NextButton>
     
    </div>
  );
};

export default AuthenticationPage;