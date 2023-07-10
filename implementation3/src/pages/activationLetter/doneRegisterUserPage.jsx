import React from "react";
import ProgressBar from "../../components/ProgressBar";
import NavigationButton from "../../components/NavigationButton";
import Mountains from "../../components/Icons/Mountains";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const DoneRegisterPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();
    return (
        <div className={"flex flex-col items-center justify-center text-custom-black dark:text-custom-white"}>
            <ProgressBar totalTasks={4} completedTasks={4} />
            <p className="absolute top-52 text-3xl font-bold">{t('welcomeAsMinIdUser')}</p>
            <p className="p-32 text-center">{t('userRegistered')}</p>

            <Mountains />
            
            <NavigationButton position={'center'} text={t('home')} onClick={() => navigate("/.")}/>
        
       
        </div>
    )
}

export default DoneRegisterPage; 