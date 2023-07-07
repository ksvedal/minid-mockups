import React from 'react';
import "../../index.css"
import NavigationButton from "../../components/NavigationButton.jsx"
import ProgressBar from "../../components/ProgressBar"
import Mountains from "../../components/Icons/Mountains.jsx";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NoActivationLetterOrderedPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
        
        <div className={"flex flex-col items-center justify-center h-screen text-custom-black dark:text-custom-white"}>
            <ProgressBar totalTasks={3} completedTasks={3} />
            <h1 className="absolute top-52 text-3xl font-bold">{t('activationofMinID')}</h1>
            <h1 className='text-center mx-32'>
                {t('activationSendByMailExplanation')}
            </h1>
            <h1 className='text-center m-10'>
                {t('normalWorkingTime10Days')}
            </h1>
        

            <Mountains />
           
            <NavigationButton position={'center'} text={t('home')} onClick={() => navigate("/.")}/>
       
        </div>
    );
};

export default NoActivationLetterOrderedPage;