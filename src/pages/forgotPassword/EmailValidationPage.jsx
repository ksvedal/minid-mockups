import React from 'react';
import { Link } from 'react-router-dom';
import "../../index.css"
import SmallInputField from '../../components/SmallInputField.jsx';
import ProgressBar from '../../components/ProgressBar.jsx';
import MailImage from "../../images/envelope.png";
import NavigationButton from "../../components/NavigationButton";

const EmailValidationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ProgressBar totalTasks={5} completedTasks={4} />
      <div className="w-full px-10 flex flex-col items-center">
        <div className="flex items-center justify-center">
          <img className="pb-16" src={MailImage} width="150px" alt="Grey Smartphone" />
        </div>
        <h1 className="text-center">Skriv inn engangskode fra epost</h1>
        <div className="mb-3 mt-2 flex items-center justify-center space-x-2">
          <SmallInputField placeholder="0" pattern="[0-9]" />
          <SmallInputField placeholder="0" pattern="[0-9]" />
          <SmallInputField placeholder="0" pattern="[0-9]" />
          <SmallInputField placeholder="0" pattern="[0-9]" />
          <SmallInputField placeholder="0" pattern="[0-9]" />
          <SmallInputField placeholder="0" pattern="[0-9]" />
        </div>
      </div>
      <div className={"absolute m-10 w-1/2 px-10 bottom-0"}>
          <Link to="/resetPassword">
            <NavigationButton />
          </Link>
          <Link to="/.">
            <NavigationButton text={"Avbryt"}/>
          </Link>
        </div>
    </div>
  );
};
export default EmailValidationPage;