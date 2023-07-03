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

<>
  <div className="flex flex-col items-center justify-center h-screen">
    <ProgressBar totalTasks={3} completedTasks={2} />
  </div>
  <div className="flex flex-col items-center h-screen mb-20">
    <h1 className="text-3xl font-bold mb-16">{t('password')}</h1>
    <div className="flex flex-col items-start w-full">
      <p className=" mb-2">{t('enterPassword')}</p>
      <div className="relative">
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
    <Link to="/authentication2" className="mt-2 self-start">
      <h2>{t('forgottenPassword')}</h2>
    </Link>
  </div>
  <div className="absolute w-1/2 px-10 bottom-0 m-10">
    <NavigationButton onClick={handleClick} />
    <NavigationButton text={t('back')} onClick={() => navigate("/")} />
  </div>
</>

 
  );
};

export default PasswordLoginPage;

