import React from 'react';
import InputField from '../components/input.jsx';
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';

const ContactInfoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Contact info page</h2>
      <InputField />
      <InputField />

      <NextButton>
      <Link to="/">Neste</Link>
      </NextButton>
     
    </div>
  );
};

export default ContactInfoPage;
