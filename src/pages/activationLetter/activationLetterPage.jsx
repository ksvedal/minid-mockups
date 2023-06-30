import React from "react";
import ProgressBar from "../../components/ProgressBar";
import InputField from "../../components/InputField";
import { Link } from "react-router-dom";
import NavigationButton from "../../components/NavigationButton";

const ActivationLetterPage = () => {
    return (
        <div className={"flex items-center justify-center h-screen"}>
            <ProgressBar totalTasks={4} completedTasks={2} />
            <div className={"flex flex-col items-center justify-center h-screen"}>
                <p>12345678910 har bestilt aktiveringsbrev. </p>
                <p>Skriv inn aktiveringskoden under.</p>
                <InputField />
            </div>
            <div className={"absolute w-1/2 px-10 bottom-0 m-10"}>
                <Link to="/registerUser">
                    <NavigationButton text={"Neste"}/>
                </Link>
                <Link to="/noactivationletterordered">
                    <NavigationButton text={"Bestill nytt aktiveringsbrev"} />
                </Link>
                <Link to="/.">
                    <NavigationButton text={"Tilbake"} />
                </Link>
            </div>
        </div>
    )
}

export default ActivationLetterPage; 