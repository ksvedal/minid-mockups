import React from 'react';
import InputField from '../components/Input.jsx';
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';

const Password = () => {
  return (
    <div>
      <h1>Skriv inn passord</h1>
      <InputField placeholder={"Passord"}/>
      <NextButton>
      <Link to="/authentication">Neste</Link>
      </NextButton>
     
    </div>
  );
};

export default Password;
