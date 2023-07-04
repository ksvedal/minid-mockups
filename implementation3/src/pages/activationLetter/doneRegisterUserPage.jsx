import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import NavigationButton from "../../components/NavigationButton";
import {useTranslation} from "react-i18next";

const DoneRegisterPage = () => {
    const {t} = useTranslation()
    return (
        <div className={"flex flex-col items-center justify-center text-custom-black dark:text-custom-white"}>
        <ProgressBar totalTasks={4} completedTasks={4} />
        <p className="absolute top-52 text-3xl font-bold">{t('welcomeAsMinIdUser')}</p>
        <p className="p-32">{t('userRegistered')}</p>
        <div className={"absolute w-1/2 px-10 bottom-0 m-10"}>
            <Link to="/."><NavigationButton text={t('home')}/></Link>
            </div>
        </div>
    )
}

export default DoneRegisterPage; 