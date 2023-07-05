import React, { useState } from 'react';
import NavigationButton from "../components/NavigationButton.jsx"
import Mountains from "../components/Icons/Mountains.jsx";
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
          <Link to="/authentication2">
          <h2 className='mt-2'>{t('forgottenPassword')}</h2>
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

