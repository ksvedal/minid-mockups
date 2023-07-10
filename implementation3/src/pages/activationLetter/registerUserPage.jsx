import React from 'react';
import "../../index.css"
import NavigationButton from "../../components/navigationButton.jsx"
import ProgressBar from "../../components/progressBar.jsx";
import Mountains from "../../components/Icons/mountains.jsx";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import InputField from "../../components/inputField.jsx";


const RegisterPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center text-custom-black dark:text-custom-white">
        <div className={"flex flex-col items-center justify-center"}>
            <ProgressBar totalTasks={4} completedTasks={3} />
            <h1 className="absolute top-28 text-3xl font-bold">{t('activationofMinID')}</h1>
            <div className="text-left mb-4"><p>{t('pleaseEnterUserInformation')}</p></div>
            <div className={"flex flex-col justify-center mb-20"}>
                <p>{t('email')}</p>
                <InputField placeholder={`${t('email')}`} pattern="[0-9]+" autofocus={true} />
                <p>{t('phoneNumber')}</p>
                <InputField placeholder={`${t('phoneNumber')}`} pattern="[0-9]+" />
                <p>{t('password')}</p>
                <InputField placeholder={`${t('password')}`} pattern="[0-9]+" />
                <p>{t('repeatPassword')}</p>
                <InputField placeholder={`${t('repeatPassword')}`} pattern="[0-9]+" />
                <p>{t('byPressingNextYouAcceptTerms')}</p>
                <a href="https://eid.difi.no/nb/minid/brukervilkar" className="underline">{t('seeTerms')}</a>
            </div>
            </div>

            <Mountains />
            
            <NavigationButton position={'right'} text={t('next')} onClick={() => navigate("/doneRegisterUser")}/>
            <NavigationButton position={'left'} text={t('cancel')} onClick={() => navigate("/.")} />
           
        </div>
    )
}

export default RegisterPage; 