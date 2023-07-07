import React from "react";
import {Link, useNavigate} from "react-router-dom";
import ProgressBar from "../../components/progressBar";
import NavigationButton from "../../components/navigationButton";
import {useTranslation} from "react-i18next";

const DoneRegisterPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ProgressBar totalTasks={4} completedTasks={2} />
            <div className="w-full px-10 flex flex-col items-center">
                <p className="p-5 text-2xl">{t('welcomeAsMinIdUser')}</p>
                <p>{t('userRegistered')}</p>
                <NavigationButton text={t('home')} onClick={() => navigate("/.")} />
            </div>
        </div>
    )
}

export default DoneRegisterPage; 