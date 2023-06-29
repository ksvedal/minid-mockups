import React from 'react';
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import UpdateContactInfoField from '../components/UpdateContactInfoField.jsx';

const ContactInfoPage = ({linkFrom, linkTo, totalTasks}) => {
  return (
    <div className={"flex flex-col items-center justify-center h-screen"}>
      // ContactInfoPage is always the last step completedTasks = totalTasks
      <ProgressBar totalTasks={totalTasks} completedTasks={totalTasks} /> 
        <div className={"absolute m-10 md:m-16 w-full px-10 top-14"}>
          <h1 className='py-5'>Se etter om kontaktinformasjonen stemmer</h1>
          <h1>Telefonnummer</h1>
          <UpdateContactInfoField className='color-black' placeholder="+4712345678" pattern="[0-9]+" />
          <h1>Epost</h1>
          <UpdateContactInfoField className='color-black' placeholder="ola.nordmann@gmail.com" />
        </div>
        <div className={"absolute m-10 w-full px-10 bottom-0"}>
            <Link to={linkTo}> <NextButton /> </Link>
            <Link to={linkFrom}> <BackButton/> </Link>
        </div>
    </div>
  );
};

export default ContactInfoPage;
