import React from 'react';
import InputField from '../components/InputField.jsx';
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton.jsx';

const Password = () => {
  return (
    <div>
      <h1>Skriv inn passord</h1>
      <InputField placeholder={"Passord"} type={"password"} />
      <NextButton>
      <Link to="/authentication">Neste</Link>
      </NextButton>
      <BackButton>
      <Link to="/.">Tilbake</Link>
      </BackButton>
     
    </div>
  );
};

export default Password;
