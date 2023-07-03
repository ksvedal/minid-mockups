import React, { useState } from 'react';
import NavigationButton from "../components/NavigationButton.jsx"
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar.jsx';
import {useTranslation} from "react-i18next";

const PasswordLoginPage = () => {
  const {t} = useTranslation()
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [errormessage, setErrormessage] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    if (input.length !== 0) {
      setErrormessage("");
      navigate("/authentication1");
    } else {
      setErrormessage(t('errorWrongPassword'));
    }
  }

  return (
  <div className="flex flex-col items-center justify-center h-screen">
    <ProgressBar totalTasks={3} completedTasks={2} />
    <h1 className="absolute top-52 text-3xl font-bold">{t('password')}</h1>
    <div className="absolute top-64">
      
      <div className="flex flex-col items-start w-full">
        <p className=" mb-2">{t('enterPassword')}</p>
        <div>
          <input
            className="text-custom-black bg-custom-white border-2 border-custom-lightgrey p-4 w-full font-semibold"
            placeholder={t('password')}
            type="password"
            value={input}
            onChange={handleInput}
          />
          {errormessage && (
            <p className="text-red-700 mt-2">{errormessage}</p>
          )}
        </div>
      </div>
    </div>
      <div className={"absolute w-7/12 bottom-56 text-center right-0 "}>
        <NavigationButton onClick={navigate("/authentication1")}/>
      </div>

      <div className={"absolute w-7/12 bottom-32 text-center right-0 "}>
        <NavigationButton text="Glemt passord" onClick={handleClick}/>
      </div>

      <div className={"absolute w-7/12 bottom-8 text-center left-0 "}>
        <NavigationButton text="Tilbake" onClick={navigate("/")}/>
      </div>  
   
  </div>
  );
};

export default PasswordLoginPage;

