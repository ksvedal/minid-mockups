import React from 'react';
import InputField from '../components/Input.jsx';
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';

const ContactInfoPage = () => {
  return (
    <div>
      <h1>Skriv inn Telefonnummer</h1>
      <InputField placeholder={"8 tall"} />
      <h1>Skriv inn epost</h1>
      <InputField placeholder={"epostadresse"}/>
      <NextButton>
      <Link to="/validationSuccesfull">Neste</Link>
      </NextButton>
     
    </div>
  );
};

export default ContactInfoPage;
