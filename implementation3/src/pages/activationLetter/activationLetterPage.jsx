import React from "react";
import ProgressBar from "../../components/progressBar";
import InputField from "../../components/inputField";
import { Link, useNavigate } from "react-router-dom";
import Mountains from "../../components/Icons/mountains";
import NavigationButton from "../../components/navigationButton";
import {useTranslation} from "react-i18next";



const ActivationLetterPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
  
    return (
      <div className="flex flex-col items-center justify-center text-custom-black dark:text-custom-black">
        <ProgressBar totalTasks={4} completedTasks={2} />
        <div className="flex flex-col items-center justify-center">
          <h1 className="absolute top-52 text-3xl font-bold">{t('activationofMinID')}</h1>
          <div className="text-center mb-4">
            <p>{t('hasOrderedActivationLetter')}</p>
            <p>{t('enterActivationCode')}</p>
          </div>
          <InputField placeholder={`${t('activationcode')}`} autofocus={true}  />
  
          <Link to="/noactivationletterordered">
            <h2 className="underline text-left">{t('orderNewActivationLetter')}</h2>
          </Link>
        </div>

        <Mountains />

        <NavigationButton position={'right'} text={t('orderActivationLetter')} onClick={() => navigate("/noactivationletterordered")}/>
        <NavigationButton position={'left'} text={t('back')} onClick={() => navigate("/.")}/>
      
      </div>
    );
  };
  
  export default ActivationLetterPage;