import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButton from "../components/NavigationButton.jsx"
import "../index.css"
import ProgressBar from '../components/ProgressBar.jsx';
import { useState } from 'react';
import { useTranslation } from "react-i18next";


const Homepage = () => {
  const { t, i18n } = useTranslation()
  const regex = /^[0-9]+$/;
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const[errormsg, setErrormsg] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleNextButtonClick = () => {
    if (input.length === 11 && regex.test(input)) {
      navigate("/password");
    } else if (input.length === 1) {
      navigate("/activationLetter");
    } else if (input.length === 2) {
      navigate("/noActivationLetter");
    } else {
      setErrormsg(t('errorBirthNumber'));
    }
  };

  return (
      <div className={"text-custom-black flex flex-col items-center dark:text-custom-white h-screen"}>
        <ProgressBar totalTasks={3} completedTasks={1} />
        <h1 className="text-3xl font-bold mb-8">{t('birthnumber')}</h1>
        <div className='p-6'>
        <h1>{t('insertBirthNumber')}</h1>
          <input maxLength={11} className={"p-4 bg-custom-white text-custom-black placeholder-custom-darkgrey my-2 w-full border-2 border-custom-lightgrey"}
                placeholder={`11 ${t('numbers')}`} pattern={"[0-9]"} value={input} onChange={handleInput}>
          </input>
          <p className={"my-1 text-custom-red absolute"}>{errormsg && <p> {errormsg}</p >}</p>
        </div>
        
        <div className={"absolute w-7/12 bottom-32 text-center right-0 "}>
          <NavigationButton onClick={handleNextButtonClick}/>
        </div>

        <div className={"absolute w-7/12 bottom-8 text-center left-0 "}>
          <NavigationButton text={t("back")} />
        </div>
      </div>
  );
};

export default Homepage;