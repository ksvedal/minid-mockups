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
        <div className={"flex flex-col items-center justify-center"}>
        <ProgressBar totalTasks={4} completedTasks={4} />
        <p className="p-5 text-2xl">{t('welcomeAsMinIdUser')}</p>
        <p>{t('userRegistered')}</p>

        <Mountains />
        
        <NavigationButton position={'center'} text={t('home')} onClick={() => navigate("/.")}/>
      
       
        </div>
    )
}

export default DoneRegisterPage; 