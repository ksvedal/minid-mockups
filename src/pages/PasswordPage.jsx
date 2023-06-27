import React from 'react';
import InputField from '../components/Input.jsx';
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';

const Password = () => {
  return (
    <div>
      <h2>Skriva inn ditt passord her hehe</h2>
      <InputField />
      <NextButton>
      <Link to="/authentication">Neste</Link>
      </NextButton>
     
    </div>
  );
};

export default Password;
