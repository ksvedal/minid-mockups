import React from 'react';
import NextButton from "../../components/NextButton.jsx"
import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton.jsx';
import ProgressBar from '../../components/ProgressBar.jsx';
import InputField from "../../components/InputField.jsx";


const ResetPasswordPage = () => {
  return (
    <div className={"flex flex-col items-center justify-center h-screen"}>
      <ProgressBar totalTasks={5} completedTasks={5} />
        <div className={"absolute m-10 md:m-16 w-full px-10 top-14"}>
          <h1 className='py-5'>Nytt Passord</h1>
          <h1>Passord</h1>
          <InputField className='color-black' placeholder="Passord" type={"password"} />
          <h1>Gjenta Passord</h1>
          <InputField className='color-black' placeholder="Passord" type={"password"} />
        </div>
        <div className={"absolute m-10 w-full px-10 bottom-0"}>
            <Link to="/contactInfo2"> <NextButton /> </Link>
            <Link to="/emailValidation"> <BackButton/> </Link>
        </div>
    </div>
  );
};

export default ResetPasswordPage;
