import React from 'react';
import "../../index.css"
import NextButton from "../../components/NextButton.jsx"
import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import ProgressBar from "../../components/ProgressBar";

const NoActivationLetterPage = () => {
    return (
        <>
            <div className={"flex flex-col items-center justify-center h-screen"}>
                <ProgressBar totalTasks={3} completedTasks={2} />

                <h1 className='py-3 text-center m-10'>
                    00000000000 har ikkje opprettet en minID-bruker. Trykk på
                    "bestill aktiveringsbrev for å opprette."
                </h1>
            </div>
            <div className={"absolute w-full px-10 m-10 bottom-0"}>
                <Link to="/noactivationletterordered">
                    <NextButton text={"Bestill aktiveringsbrev"} />
                </Link>
                <Link to="/.">
                    <BackButton />
                </Link>
            </div>
        </>
    );
};

export default NoActivationLetterPage;