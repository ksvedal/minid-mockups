import React from 'react';
import NavigationButton from "../components/navigationButton.jsx"
import {Link, useNavigate} from 'react-router-dom';
import ProgressBar from '../components/progressBar.jsx';
import Mountains from "../components/Icons/mountains.jsx";
import UpdateContactInfoField from '../components/updateContactInfoField.jsx';
import {useTranslation} from "react-i18next";

const ContactInfoPage = ({linkTo, totalTasks}) => {
  const {t} = useTranslation()
  const navigate = useNavigate();

  return (
    <div className={"flex flex-col items-center justify-center h-screen text-custom-black dark:text-custom-black"}>
      {/*ContactInfoPage is always the last step completedTasks = totalTasks*/}
      <ProgressBar totalTasks={totalTasks} completedTasks={totalTasks} />
      <div className='dark:text-custom-white'>
        <h1 className='absolute top-52 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-center'>{t('confirmContactInformation')}</h1>
        <h1>{t('phoneNumber')}</h1>
        <UpdateContactInfoField placeholder="+4712345678" pattern="[0-9]+" />
        <h1>{t('email')}</h1>
        <UpdateContactInfoField placeholder="ola.nordmann@gmail.com" />
      </div>

      <Mountains />
      
      <NavigationButton position={'right'} text={t('confirm')} onClick={() => navigate(linkTo)}/>
      <NavigationButton position={'left'} text={t('back')} onClick={() => navigate("/.")}/>

    </div>
  );
};

export default ContactInfoPage;
