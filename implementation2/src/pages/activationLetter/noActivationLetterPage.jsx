import React from 'react';
import "../../index.css"
import NavigationButton from "../../components/NavigationButton.jsx"
import {Link, useNavigate} from 'react-router-dom';
import ProgressBar from "../../components/ProgressBar";
import {useTranslation} from "react-i18next";

const NoActivationLetterPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <ProgressBar totalTasks={4} completedTasks={2} />
                <div className="w-full px-10 flex flex-col items-center">
                <h1 className='py-3 text-center m-10'>
                    {t('hasNotCreatedUserPressOrderToCreate')}
                </h1>
            </div>
            <NavigationButton text={t('orderActivationLetter')} onClick={() => navigate("/noactivationletterordered")}/>
            <NavigationButton text={t('back')} onClick={() => navigate("/.")}/>
            </div>
        </>
    );
};

export default NoActivationLetterPage;