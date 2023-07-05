import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButton from "../components/NavigationButton.jsx"
import "../index.css"
import ProgressBar from '../components/ProgressBar.jsx';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import Mountains from '../components/Icons/mountains.jsx';
import Forest from '../components/Icons/forest.jsx';


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
      <div className={"flex flex-col items-center justify-center h-screen"}>
        <p className={"my-2 text-red-700 absolute top-80"}>{errormsg && <p> {errormsg}</p >}</p>
        <ProgressBar totalTasks={3} completedTasks={1} />
        <h1>{t('insertBirthNumber')}</h1>
        <input maxLength={11} className={"p-3 bg-custom-light-grey text-center text-black placeholder-custom-dark-grey my-2 rounded-full w-auto font-semibold dark:bg-custom-very-darker-grey dark:text-white"}
               placeholder={`11 ${t('numbers')}`} pattern={"[0-9]"} value={input} onChange={handleInput}>
        </input>
        <div className={"absolute m-8 w-1/2 px-10 bottom-0 text-center"}>
          <NavigationButton onClick={handleNextButtonClick}/>
        </div>
        <div className=" absolute bottom-0">
          <Forest  />
        </div>
      </div>
  );
};

export default Homepage;