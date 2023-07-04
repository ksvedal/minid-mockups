import React from 'react';
import NavigationButton from "../components/NavigationButton.jsx"
import {Link, useNavigate} from 'react-router-dom';
import ProgressBar from '../components/ProgressBar.jsx';
import Mountains from "../components/Icons/Mountains.jsx";
import UpdateContactInfoField from '../components/UpdateContactInfoField.jsx';
import {useTranslation} from "react-i18next";

const ContactInfoPage = ({linkTo, totalTasks}) => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
    <div className={"flex flex-col items-center justify-center h-screen"}>
      {/*ContactInfoPage is always the last step completedTasks = totalTasks*/}
      <ProgressBar totalTasks={totalTasks} completedTasks={totalTasks} />
        <div className={"absolute m-10 md:m-16 w-full px-10 top-14"}>
          <h1 className='py-5'>{t('confirmContactInformation')}</h1>
          <h1>{t('phoneNumber')}</h1>
          <UpdateContactInfoField className='color-black' placeholder="+4712345678" pattern="[0-9]+" />
          <h1>{t('email')}</h1>
          <UpdateContactInfoField className='color-black' placeholder="ola.nordmann@gmail.com" />
        </div>

        <Mountains />

      <div className={"absolute w-7/12 bottom-32 text-center right-0 "}>
        <NavigationButton text={t('confirm')} onClick={() => navigate(linkTo)}/>
      </div>

      <div className={"absolute w-7/12 bottom-8 text-center left-0 "}>
        <NavigationButton text={t('back')} onClick={() => navigate("/.")}/>
      </div> 
    </div>
  );
};

export default ContactInfoPage;
