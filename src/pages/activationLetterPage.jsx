import React from "react";
import ProgressBar from "../components/ProgressBar";
import InputField from "../components/InputField";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";

const activationLetterPage = () => {
    return (
        <div className={"flex flex-col items-center justify-center h-screen"}>
            <ProgressBar totalTasks={3} completedTasks={3} />
        <div>
            <div className={"flex flex-col items-center justify-center h-screen"}>
                <h1>12345678910 har bestilt aktiveringsbrev. Skriv inn aktiveringskoden under.</h1>
                <InputField />
            </div>
            <div className={"absolute w-full px-10 bottom-0 m-10"}>
                <NextButton>Neste</NextButton>
                <BackButton><Link to="/.">Tilbake</Link></BackButton>
            </div>
            </div>
        </div>
    )
}

export default activationLetterPage; 