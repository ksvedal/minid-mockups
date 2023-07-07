import React from "react";
import ProgressBar from "../../components/progressBar";
import InputField from "../../components/inputField";
import { Link } from "react-router-dom";
import NavigationButton from "../../components/navigationButton";
import {useTranslation} from "react-i18next";

const ActivationLetterPage = () => {
    const {t} = useTranslation()
    return (
        <div className={"flex items-center justify-center h-screen"}>
            <ProgressBar totalTasks={4} completedTasks={2} />
            <div className={"flex flex-col items-center justify-center h-screen"}>
                <p>{t('hasOrderedActivationLetter')} </p>
                <p>{t('enterActivationCode')}</p>
                <InputField />
            </div>
            <div className={"absolute w-1/2 px-10 bottom-0 m-10"}>
                <Link to="/registerUser">
                    <NavigationButton text={t('next')}/>
                </Link>
                <Link to="/noactivationletterordered">
                    <NavigationButton text={t('orderNewActivationLetter')} />
                </Link>
                <Link to="/.">
                    <NavigationButton text={t('back')} />
                </Link>
            </div>
        </div>
    )
}

export default ActivationLetterPage; 