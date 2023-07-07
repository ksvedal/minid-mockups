import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import ProgressBar from '../../components/ProgressBar.jsx';
import InputField from "../../components/InputField.jsx";
import NavigationButton from "../../components/NavigationButton";
import {useTranslation} from "react-i18next";


const ResetPasswordPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
      <div className="flex flex-col items-center justify-center h-screen">
          <ProgressBar totalTasks={3} completedTasks={2} />
          <div className="w-full px-10 flex flex-col items-center">
          <h1 className='py-5'>{t('newPassword')}</h1>
          <h1>Passord</h1>
          <InputField className='color-black' placeholder="Passord" type={"password"} />
          <h1>Gjenta Passord</h1>
          <InputField className='color-black' placeholder="Passord" type={"password"} />
            <NavigationButton onClick={() => navigate("/contactInfo2")} />
            <NavigationButton onClick={() => navigate("/.")} text={t('cancel')}/>
          </div>
    </div>
  );
};

export default ResetPasswordPage;
