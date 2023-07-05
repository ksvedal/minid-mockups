import React from 'react';
import ProgressBar from '../../components/ProgressBar.jsx';
import InputField from "../../components/InputField.jsx";
import NavigationButton from "../../components/NavigationButton";
import Mountains from "../../components/Icons/Mountains.jsx";
import {useTranslation} from "react-i18next";
import {useNavigate} from 'react-router-dom';


const ResetPasswordPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();
  return (
    <div className={"flex flex-col items-center justify-center h-screen"}>
      <ProgressBar totalTasks={5} completedTasks={5} />
      <div className={"absolute m-10 md:m-16 w-full px-10 top-14"}>
        <h1 className='py-5'>{t('newPassword')}</h1>
        <h1>Passord</h1>
        <InputField className='color-black' placeholder="Passord" type={"password"} />
        <h1>Gjenta Passord</h1>
        <InputField className='color-black' placeholder="Passord" type={"password"} />
      </div>

      <Mountains />
      <NavigationButton position={'right'} text={t('confirm')} onClick={() => navigate("/contactInfo2")}/>
      <NavigationButton position={'left'} text={t('cancel')} onClick={() => navigate("/.")}/>

    </div>
  );
};

export default ResetPasswordPage;
