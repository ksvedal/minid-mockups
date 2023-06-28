import React from 'react';
import InputField from '../components/InputField.jsx';
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

const Password = () => {
  return (
      <>
      <div className={"flex flex-col items-center justify-center h-screen"}>
        <ProgressBar totalTasks={3} completedTasks={2} />
      </div>
          <div className={"absolute w-full bottom-0 m-10"}>
            <h1>Skriv inn passord</h1>
            <InputField placeholder={"Passord"} type={"password"} />
            <NextButton>
                <Link to="/authentication">Neste</Link>
            </NextButton>
            <BackButton>
                <Link to="/.">Tilbake</Link>
            </BackButton>
        </div>
      </>
  );
};

export default Password;
