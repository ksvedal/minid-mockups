import React from "react";
import ProgressBar from "../../components/ProgressBar";
import InputField from "../../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import NavigationButton from "../../components/NavigationButton";
import {useTranslation} from "react-i18next";



const ActivationLetterPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
  
    return (
      <div className="flex flex-col items-center justify-center text-custom-black dark:text-custom-white">
        <ProgressBar totalTasks={4} completedTasks={2} />
        <div className="flex flex-col items-center justify-center">
          <h1 className="absolute top-52 text-3xl font-bold">{t('activationofMinID')}</h1>
          <div className="text-center mb-4">
            <p>{t('hasOrderedActivationLetter')}</p>
            <p>{t('enterActivationCode')}</p>
          </div>
          <InputField placeholder={`${t('activationcode')}`} />
  
          <Link to="/noactivationletterordered">
            <h2 className="underline text-left">{t('orderNewActivationLetter')}</h2>
          </Link>
        </div>
        <div>
          <div className="absolute w-7/12 bottom-32 text-center right-0">
            <NavigationButton text={t('next')} onClick={() => navigate("/registerUser")} />
          </div>
  
          <div className="absolute w-7/12 bottom-8 text-center left-0">
            <NavigationButton text={t('back')} onClick={() => navigate("/")} />
          </div>
        </div>
      </div>
    );
  };
  
  export default ActivationLetterPage;