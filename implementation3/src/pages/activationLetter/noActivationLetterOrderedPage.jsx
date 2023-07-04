import React from 'react';
import "../../index.css"
import NavigationButton from "../../components/NavigationButton.jsx"
import ProgressBar from "../../components/ProgressBar";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NoActivationLetterOrderedPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
        <>
            <div className={"flex flex-col items-center justify-center h-screen text-custom-black dark:text-custom-white"}>
                <ProgressBar totalTasks={3} completedTasks={3} />
                <h1 className='py-3 text-center m-10'>
                    {t('activationSendByMailExplanation')}
                </h1>
                <h1 className='py-3 text-center m-10'>
                    {t('normalWorkingTime10Days')}
                </h1>
            </div>
            <div className={"absolute w-1/2 px-10 m-10 bottom-0"}>
                <NavigationButton text={t('home')} onClick={() => navigate("/.")}/>
            </div>
        </>
    );
};

export default NoActivationLetterOrderedPage;