import React from 'react';
import InputField from '../components/InputField.jsx';
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';

const ContactInfoPage = () => {
  return (
    <div>
      <h1>Skriv inn telefonnummer</h1>
      <InputField placeholder="8 tall" pattern="[0-9]+" />
      <h1>Skriv inn epost</h1>
      <InputField placeholder="epostadresse" />
      <NextButton>
        <Link to="/validationSuccessfull">Neste</Link>
      </NextButton>
    </div>
  );
};

export default ContactInfoPage;
