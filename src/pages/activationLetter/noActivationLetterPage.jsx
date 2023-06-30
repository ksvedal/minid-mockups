import React from 'react';
import "../../index.css"
import NavigationButton from "../../components/NavigationButton.jsx"
import {Link, useNavigate} from 'react-router-dom';
import ProgressBar from "../../components/ProgressBar";

const NoActivationLetterPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className={"flex flex-col items-center justify-center h-screen"}>
                <ProgressBar totalTasks={3} completedTasks={2} />

                <h1 className='py-3 text-center m-10'>
                    00000000000 har ikkje opprettet en minID-bruker. Trykk på
                    "bestill aktiveringsbrev" for å opprette.
                </h1>
            </div>
            <div className={"absolute w-1/2 px-10 m-10 bottom-0"}>
                <NavigationButton text={"Bestill aktiveringsbrev"} onClick={() => navigate("/noactivationletterordered")}/>
                <NavigationButton text={"Tilbake"} onClick={() => navigate("/.")}/>
            </div>
        </>
    );
};

export default NoActivationLetterPage;