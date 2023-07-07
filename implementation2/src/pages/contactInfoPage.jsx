import React from 'react';
import NavigationButton from "../components/navigationButton.jsx"
import {Link, useNavigate} from 'react-router-dom';
import ProgressBar from '../components/progressBar.jsx';
import UpdateContactInfoField from '../components/updateContactInfoField.jsx';
import {useTranslation} from "react-i18next";

const ContactInfoPage = ({linkTo, totalTasks}) => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ProgressBar totalTasks={3} completedTasks={totalTasks} />
            <div className="w-full px-10 flex flex-col items-center">
          <h1 className='py-5'>{t('confirmContactInformation')}</h1>
          <h1>{t('phoneNumber')}</h1>
          <UpdateContactInfoField className='color-black' placeholder="+4712345678" pattern="[0-9]+" />
          <h1>{t('email')}</h1>
          <UpdateContactInfoField className='color-black' placeholder="ola.nordmann@gmail.com" />
        </div>
        <NavigationButton text={t('confirm')} onClick={() => navigate(linkTo)}/>

        </div>
  );
};

export default ContactInfoPage;
