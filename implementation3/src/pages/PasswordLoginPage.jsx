import React, { useState } from 'react';
import NavigationButton from "../components/NavigationButton.jsx"
import Mountains from "../components/Icons/mountains.jsx";
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
  <div className="flex flex-col items-center justify-center h-screen text-custom-black dark:text-custom-white">
    <ProgressBar totalTasks={3} completedTasks={2} />
    <h1 className="absolute top-52 text-3xl font-bold">{t('password')}</h1>
    <div className="absolute top-64">
      
      <div className="flex flex-col items-start w-full">
        <p className={`mt-10 ${errormessage ? 'text-custom-red' : 'text-custom-black dark:text-custom-white'}`}>
        {errormessage ? errormessage : t('enterPassword')}
        </p>
        <div>
          <input
            className={`p-4 bg-custom-white text-custom-black border-2 w-full my-2 
            ${errormessage ? 'border-custom-red' : 'border-custom-lightgrey'}`}
            placeholder={t('password')}
            autoFocus={true}
            type="password"
            value={input}
            onChange={handleInput}
            maxLength={5}
          />
         {/*  {errormessage && (
            <p className="text-custom-red mt-2">{errormessage}</p>
          )} */}
          <Link to="/authentication2">
          <h2 className='mt-2 underline'>{t('forgottenPassword')}</h2>
          </Link>
        </div>
      </div>

    </div>
    
    <Mountains />
  
    <NavigationButton position="right" onClick={handleClick}/>
    <NavigationButton position="left" text={t('back')} onClick={() => navigate("/.")}/>
   
  </div>
  );
};

export default PasswordLoginPage;

