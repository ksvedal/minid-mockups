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
    <div>
      <div className='flex flex-col items-center justify-center h-screen'>
        <ProgressBar totalTasks={3} completedTasks={2} />
        <h1 className='text-3xl text-bold'>{t("passwordTitle")}</h1>
        
      </div>

    </div>
/*     <>
      <div className={"flex flex-col items-center justify-center h-screen"}>
        <ProgressBar totalTasks={3} completedTasks={2} />
      </div>
      <div className={"flex flex-col items-center justify-center h-screen mb-20"}>
        <h1>{t('enterPassword')}</h1>
        <input className={`text-black bg-custom-light-grey p-3 m-1 dark:bg-custom-very-darker-grey dark:text-white text-center rounded-full w-auto font-semibold`}
          placeholder={t('password')} type={"password"} value={input} onChange={handleInput} />
          <p className={"my-2 text-red-700 absolute mt-14"}>{errormessage && <p> {errormessage}</p >}</p>
        <Link to="/authentication2">
          <h2 className='mt-10'>{t('forgottenPassword')}</h2>
        </Link>
      </div>
      <div className={"absolute w-1/2 px-10 bottom-0 m-10"}>
        <NavigationButton onClick={handleClick} />
        <NavigationButton text={t('back')} onClick={() => navigate("/.")} />
      </div>
    </> */
  );
};

export default PasswordLoginPage;

