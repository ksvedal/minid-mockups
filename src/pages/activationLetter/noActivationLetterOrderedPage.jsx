import React from 'react';
import "../../index.css"
import NavigationButton from "../../components/NavigationButton.jsx"
import ProgressBar from "../../components/ProgressBar";
import {useNavigate} from "react-router-dom";

const NoActivationLetterOrderedPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className={"flex flex-col items-center justify-center h-screen"}>
                <ProgressBar totalTasks={3} completedTasks={3} />

                <h1 className='py-3 text-center m-10'>
                    MinID Aktiveringsbrev blir bare sendt per post til din folkeregistrerte
                    adresse. Er du registrert med både postadresse og bostedsadresse,
                    blir brevet sendt til postadresse. Av sikkerhetsmessige grunner,
                    blir ikke MinID Aktiveringsbrev sendt til annen adresse.
                </h1>
                <h1 className='py-3 text-center m-10'>
                    Normal leveringstid er 10 virkedager.
                </h1>
            </div>
            <div className={"absolute w-full px-10 m-10 bottom-0"}>
                <NavigationButton text={"Ta meg hjem"} onClick={() => navigate("/.")}/>
            </div>
        </>
    );
};

export default NoActivationLetterOrderedPage;