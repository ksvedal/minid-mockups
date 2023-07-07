import React from "react";
import ProgressBar from "../../components/progressBar";
import InputField from "../../components/inputField";
import {Link, useNavigate} from "react-router-dom";
import NavigationButton from "../../components/navigationButton";
import {useTranslation} from "react-i18next";

const ActivationLetterPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ProgressBar totalTasks={4} completedTasks={2} />
            <div className="w-full px-10 flex flex-col items-center">
                <p>{t('hasOrderedActivationLetter')} </p>
                <p>{t('enterActivationCode')}</p>
                <InputField />
            </div>
            <NavigationButton text={t('next')} onClick={() => navigate("/registerUser")} />
            <NavigationButton text={t('orderNewActivationLetter')} onClick={() => navigate("/noactivationletterordered")} />
            <NavigationButton text={t('back')} onClick={() => navigate("/.")} />
        </div>
    )
}

export default ActivationLetterPage; 