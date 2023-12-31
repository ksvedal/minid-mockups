import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '../../components/progressBar.jsx';
import InputField from "../../components/inputField.jsx";
import NavigationButton from "../../components/navigationButton";
import {useTranslation} from "react-i18next";


const ResetPasswordPage = () => {
    const {t} = useTranslation()
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
        <div className={"absolute m-10 w-1/2 px-10 bottom-0"}>
            <Link to="/contactInfo2"> <NavigationButton /> </Link>
            <Link to="/."> <NavigationButton text={t('cancel')}/> </Link>
        </div>
    </div>
  );
};

export default ResetPasswordPage;
