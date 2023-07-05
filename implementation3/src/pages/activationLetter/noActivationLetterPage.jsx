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
            <div className={"flex flex-col items-center justify-center h-screen text-custom-black dark:text-custom-white"}>
                <ProgressBar totalTasks={3} completedTasks={2} />
                <h1 className="absolute top-52 text-3xl font-bold">{t('activationofMinID')}</h1>
                <h1 className='py-3 text-center m-32'>
                    {t('hasNotCreatedUserPressOrderToCreate')}
                </h1>
            </div>
            <div>
                <div className="absolute w-7/12 bottom-32 text-center right-0">
                    <NavigationButton text={t('orderActivationLetter')} onClick={() => navigate("/noactivationletterordered")}/>
                </div>
                <div className="absolute w-7/12 bottom-8 text-center left-0">
                    <NavigationButton text={t('back')} onClick={() => navigate("/.")}/>
                </div>
            </div>
        </>
    );
};

export default NoActivationLetterPage;