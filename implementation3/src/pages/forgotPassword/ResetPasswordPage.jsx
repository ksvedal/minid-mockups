import React from 'react';
import ProgressBar from '../../components/ProgressBar.jsx';
import InputField from "../../components/InputField.jsx";
import NavigationButton from "../../components/NavigationButton";
import {useTranslation} from "react-i18next";
import {useNavigate} from 'react-router-dom';


const ResetPasswordPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();
  return (
    <div className={"flex flex-col items-center justify-center h-screen text-custom-black dark:text-custom-white"}>
      <ProgressBar totalTasks={5} completedTasks={5} />
      <div>
        <h1 className="absolute top-52 text-3xl font-bold text-center">{t('newPassword')}</h1>
        <h1>{t('password')}</h1>
        <InputField  placeholder={t('password')} type={"password"} autofocus={true} />
        <h1>Gjenta Passord</h1>
        <InputField placeholder={t('password')} type={"password"} />
      </div>
      {/* <div className={"absolute w-20 bottom-44 text-center h-12 bg-amber-200 left-32"}> //Auduns boks
      </div> */}
      <div className={"absolute w-7/12 bottom-32 text-center right-0 "}>
        <NavigationButton text={t('confirm')} onClick={() => navigate("/contactInfo2")}/>
      </div>

      <div className={"absolute w-7/12 bottom-8 text-center left-0 "}>
        <NavigationButton text={t('cancel')} onClick={() => navigate("/.")}/>
      </div> 
    </div>
  );
};

export default ResetPasswordPage;
