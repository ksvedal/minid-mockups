import React from 'react';
import ProgressBar from '../../components/progressBar.jsx';
import InputField from "../../components/inputField.jsx";
import NavigationButton from "../../components/navigationButton.jsx";
import Mountains from "../../components/Icons/mountains.jsx";
import {useTranslation} from "react-i18next";
import {useNavigate} from 'react-router-dom';


const ResetPasswordPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();
  return (
    <div className={"flex flex-col items-center justify-center h-screen text-custom-black dark:text-custom-black"}>
      <ProgressBar totalTasks={5} completedTasks={5} />
      <div>
        <h1 className="absolute top-52 text-3xl font-bold text-center">{t('newPassword')}</h1>
        <h1>{t('password')}</h1>
        <InputField  placeholder={t('password')} type={"password"} autofocus={true} />
        <h1>Gjenta Passord</h1>
        <InputField placeholder={t('password')} type={"password"} />
      </div>

     
      <Mountains />
      <NavigationButton position={'right'} text={t('confirm')} onClick={() => navigate("/contactInfo2")}/>
      <NavigationButton position={'left'} text={t('cancel')} onClick={() => navigate("/.")}/>

    </div>
  );
};

export default ResetPasswordPage;
