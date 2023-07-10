import React from 'react';
import "../../index.css"
import NavigationButton from "../../components/navigationButton.jsx"
import ProgressBar from "../../components/progressBar";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NoActivationLetterOrderedPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <ProgressBar totalTasks={4} completedTasks={2} />
                <div className="w-full px-10 flex flex-col items-center">
                <h1 className='py-3 text-center m-10'>
                    {t('activationSendByMailExplanation')}
                </h1>
                <h1 className='py-3 text-center m-10'>
                    {t('normalWorkingTime10Days')}
                </h1>
            </div>
                <NavigationButton text={t('home')} onClick={() => navigate("/.")}/>
            </div>
        </>
    );
};

export default NoActivationLetterOrderedPage;