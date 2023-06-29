import React from 'react';
import { Link } from 'react-router-dom';
import NextButton from "../../components/NextButton.jsx"
import "../../index.css"
import SmallInputField from '../../components/SmallInputField.jsx';
import BackButton from '../../components/BackButton.jsx';
import ProgressBar from '../../components/ProgressBar.jsx';
import MailImage from "../../images/envelope.png";

const ValidateEmail = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ProgressBar totalTasks={5} completedTasks={4} />
      <div className="w-full px-10 flex flex-col items-center">
        <div className="flex items-center justify-center">
          <img className="pb-5" src={MailImage} width="100px" alt="Grey Smartphone" />
        </div>
        <h1 className="text-center">Skriv inn engangskode fra epost</h1>
        <div className="mb-14 mt-2 flex items-center justify-center space-x-2">
          <SmallInputField placeholder="0" pattern="[0-9]" />
          <SmallInputField placeholder="0" pattern="[0-9]" />
          <SmallInputField placeholder="0" pattern="[0-9]" />
          <SmallInputField placeholder="0" pattern="[0-9]" />
          <SmallInputField placeholder="0" pattern="[0-9]" />
          <SmallInputField placeholder="0" pattern="[0-9]" />
        </div>
      </div>
      <div className={"absolute m-10 w-full px-10 bottom-0"}>
          <Link to="/resetPassword">
            <NextButton />
          </Link>
          <Link to="/authentication2">
            <BackButton />
          </Link>
        </div>
    </div>
  );
};
export default ValidateEmail;