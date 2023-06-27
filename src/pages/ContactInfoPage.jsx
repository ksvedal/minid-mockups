import React from 'react';
import InputField from '../components/Input.jsx';
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';

const ContactInfoPage = () => {
  return (
    <div>
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
