import React from 'react';
import InputField from '../components/InputField.jsx';
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

const ContactInfoPage = () => {
  return (
    <div>
      <ProgressBar totalTasks={3} completedTasks={3} /> 
      <h1 className='py-5'>Se etter om kontaktinformasjonen stemmer</h1>
      <h1>Telefonnummer</h1>
      <InputField className='color-black' placeholder="+4712345678" pattern="[0-9]+" />
      <h1>Epost</h1>
      <InputField className='color-black' placeholder="ola.nordmann@gmail.com" />
      <NextButton>
      <Link to="/validationSuccessfull">Neste</Link>
      </NextButton>
      <BackButton>
      <Link to="/authentication">Tilbake</Link>
      </BackButton>
    </div>
  );
};

export default ContactInfoPage;
