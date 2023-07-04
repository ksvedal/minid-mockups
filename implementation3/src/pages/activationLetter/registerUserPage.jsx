import React from "react";
import {Link, useNavigate} from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import InputField from "../../components/InputField";
import Mountains from "../../components/Icons/Mountains";
import NavigationButton from "../../components/NavigationButton";
import {useTranslation} from "react-i18next";


const RegisterPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center">
        <div className={"flex flex-col items-center justify-center"}>
            <ProgressBar totalTasks={4} completedTasks={3} />
            <p className="p-5">{t('pleaseEnterUserInformation')}</p>
            <div className={"flex flex-col justify-center mb-20"}>
                <p>{t('email')}</p>
                <InputField placeholder={`${t('email')}`} pattern="[0-9]+" />
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
            <div className={"absolute w-1/2 px-10 bottom-0 m-10"}>
                <NavigationButton text={t('next')} onClick={() => navigate("/doneRegisterUser")}/>
                <NavigationButton text={t('cancel')} onClick={() => navigate("/.")} />
            </div>
        </div>
    )
}

export default RegisterPage; 