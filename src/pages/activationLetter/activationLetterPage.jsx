import React from "react";
import ProgressBar from "../../components/ProgressBar";
import InputField from "../../components/InputField";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import { Link } from "react-router-dom";

const ActivationLetterPage = () => {
    return (
        <div className={"flex items-center justify-center h-screen"}>
            <ProgressBar totalTasks={3} completedTasks={2} />
        
            <div className={"flex flex-col items-center justify-center h-screen"}>
                <h1>12345678910 har bestilt aktiveringsbrev. Skriv inn aktiveringskoden under.</h1>
                <InputField />
            </div>
            <div className={"absolute w-full px-10 bottom-0 m-10"}>
                <Link to="/registerUser">
                    <NextButton text={"neste"}/>
                </Link>
                <BackButton/>
            </div>
            
        </div>
    )
}

export default ActivationLetterPage; 