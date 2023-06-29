import React from 'react';
import "../index.css"
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';
import ProgressBar from "../components/ProgressBar";

const NoActivationLetterOrderedPage = () => {
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

                <Link to="/."> <NextButton text={"Hjem"} /></Link>
            </div>
        </>
    );
};

export default NoActivationLetterOrderedPage;