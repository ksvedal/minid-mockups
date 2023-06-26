import React from 'react';
import InputField from '../components/input.jsx';
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';

const Password = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Password Page</h2>
      <InputField />
      <NextButton>
      <Link to="/authentication">Neste</Link>
      </NextButton>
     
    </div>
  );
};

export default Password;
