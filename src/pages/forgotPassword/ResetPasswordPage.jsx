import React from 'react';
import NextButton from "../../components/NextButton.jsx"
import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton.jsx';
import ProgressBar from '../../components/ProgressBar.jsx';
import UpdateContactInfoField from '../../components/UpdateContactInfoField.jsx';

const ResetPasswordPage = () => {
  return (
    <div className={"flex flex-col items-center justify-center h-screen"}>
      <ProgressBar totalTasks={5} completedTasks={5} />
        <div className={"absolute m-10 md:m-16 w-full px-10 top-14"}>
          <h1 className='py-5'>Nytt Passord</h1>
          <h1>Passord</h1>
          
          <h1>Gjenta Passord</h1>
          
        </div>
        <div className={"absolute m-10 w-full px-10 bottom-0"}>
            <Link to="/contactInfo"> <NextButton /> </Link>
            <Link to="/emailValidation"> <BackButton/> </Link>
        </div>
    </div>
  );
};

export default ResetPasswordPage;
