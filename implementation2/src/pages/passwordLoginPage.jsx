import React, { useState } from 'react';
import NavigationButton from "../components/navigationButton.jsx"
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from '../components/progressBar.jsx';
import {useTranslation} from "react-i18next";
import Forest from "../components/Icons/forest";

const PasswordLoginPage = ({linkFrom} ) => {
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
      navigate("/validationSuccessfull1");
    } else {
      setErrormessage(t('errorWrongPassword'));
    }
  }

  return (
      <div className={"flex flex-col items-center justify-center h-screen"}>
        <ProgressBar totalTasks={3} completedTasks={2} />

        <div className="w-full px-10 flex flex-col items-center">
          <p className="text-center my-4 text-3xl font-semibold text-bold font-sans subpixel-antialiased text-custom-purple dark:text-custom-red">{t('enterPassword')}</p>
          <div className="my-4 flex items-center justify-center w-full">
          <input
              className="py-6 focus:shadow-2xl shadow-md subpixel-antialiased focus:outline-none border-transparent ring-3 ring-transparent focus:ring-custom-golden h-16 bg-white text-black font-semibold rounded-full border-custom-dark-grey-grey w-full text-center"
              placeholder={t('password')} type={"password"} value={input} onChange={handleInput} />
          </div>
          <p className={"my-2 text-custom-red dark:text-custom-neon-red font-semibold absolute top-40"}>{errormessage && <p> {errormessage}</p >}</p>
          <a className="text-center hover:shadow-l mb-2 font-semibold underline text-bold font-sans subpixel-antialiased text-custom-purple dark:text-custom-light-red"
             href="./resetPassword"> {t('forgottenPassword')}
          </a>
        </div>

          <NavigationButton onClick={handleClick} />
          <br/>
          <NavigationButton text={t('back')} onClick={() => navigate(linkFrom)} />
        <Forest />
      </div>
  );
};

export default PasswordLoginPage;

