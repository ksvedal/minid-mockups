import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButton from "../components/navigationButton.jsx"
import Mountains from "../components/Icons/mountains.jsx";
import "../index.css"
import ProgressBar from '../components/progressBar.jsx';
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
        <h1 className="absolute top-52 text-3xl font-bold">{t('birthnumber')}</h1>
        <div className='p-6'>
        <h1 className={`mt-10 ${errormsg ? 'text-custom-red' : 'text-custom-black dark:text-custom-white'}`}> 
        {errormsg ? errormsg : t('insertBirthNumber')}</h1>
          <input maxLength={11} 
                autoFocus={true}
<<<<<<< HEAD
                className={`p-4 bg-custom-white text-custom-black dark:bg-black dark:text-white border-2 w-full my-2 
                ${errormsg ? 'border-custom-red' : 'border-custom-lightgrey'}`}
=======
                className={`p-4 bg-custom-white text-custom-black dark:bg-black dark:border-black  dark:text-white border-2 w-full my-2 
                ${errormsg ? 'border-custom-red dark:border-custom-red' : 'border-custom-lightgrey'}`}
>>>>>>> d954c8247d77645261c60274e0ddd69dc1ef9e5d
                placeholder={`11 ${t('numbers')}`} pattern={"[0-9]"} value={input} onChange={handleInput}>
          </input>
          {/* <p className={"my-1 text-custom-red absolute"}>{errormsg && <p> {errormsg}</p >}</p> */}
        </div>

        <Mountains />
      
        <NavigationButton position={'right'} onClick={handleNextButtonClick}/>
        <NavigationButton position={'left'} text={t("back")} />
       
      </div>
  );
};

export default Homepage;