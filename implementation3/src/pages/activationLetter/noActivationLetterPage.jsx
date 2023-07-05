import React from 'react';
import "../../index.css"
import NavigationButton from "../../components/NavigationButton.jsx"
import {Link, useNavigate} from 'react-router-dom';
import ProgressBar from "../../components/ProgressBar";
import Mountains from "../../components/Icons/Mountains.jsx";
import {useTranslation} from "react-i18next";

const NoActivationLetterPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
        <>
            <div className={"flex flex-col items-center justify-center h-screen"}>
                <ProgressBar totalTasks={3} completedTasks={2} />

                <h1 className='py-3 text-center m-10'>
                    {t('hasNotCreatedUserPressOrderToCreate')}
                </h1>
            </div>
           
            <NavigationButton position={'right'} text={t('orderActivationLetter')} onClick={() => navigate("/noactivationletterordered")}/>
            <NavigationButton position={'left'} text={t('back')} onClick={() => navigate("/.")}/>
        
        </>
    );
};

export default NoActivationLetterPage;