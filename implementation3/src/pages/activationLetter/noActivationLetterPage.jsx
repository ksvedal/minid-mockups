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

                <h1 className='py-3 text-center m-10'>
                    {t('hasNotCreatedUserPressOrderToCreate')}
                </h1>
            </div>
            <div className={"absolute w-1/2 px-10 m-10 bottom-0"}>
                <NavigationButton text={t('orderActivationLetter')} onClick={() => navigate("/noactivationletterordered")}/>
                <NavigationButton text={t('back')} onClick={() => navigate("/.")}/>
            </div>
        </>
    );
};

export default NoActivationLetterPage;