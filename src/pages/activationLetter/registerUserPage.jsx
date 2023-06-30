import React from "react";
import { Link } from "react-router-dom";
import NextButton from "../../components/NextButton";
import ProgressBar from "../../components/ProgressBar";
import BackButton from "../../components/BackButton";
import InputField from "../../components/InputField";

const RegisterPage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
        <div className={"flex flex-col items-center justify-center"}>
            <ProgressBar totalTasks={4} completedTasks={3} />
            <p className="p-5">Vennligst fyll inn brukerinformasjon</p>
            <div className={"flex flex-col justify-center mb-20"}>
                <p>E-post</p>
                <InputField placeholder="E-post" pattern="[0-9]+" />
                <p>Telefonnummer</p>
                <InputField placeholder="+47" pattern="[0-9]+" />
                <p>Opprett passord</p>
                <InputField placeholder="Passord" pattern="[0-9]+" />
                <p>Gjenta passord</p>
                <InputField placeholder="Gjenta passord" pattern="[0-9]+" />
                <p>Ved å trykke på 'Neste' samtykker du til bruksvilkår for MinID.</p>
                <a href="https://eid.difi.no/nb/minid/brukervilkar" className="underline">Se Bruksvilkår</a>
            </div>
            </div>
            <div className={"absolute w-1/2 px-10 bottom-0 m-10"}>
            <Link to="/doneRegisterUser"><NextButton text={"Neste"}/></Link>
            <Link to="/."><BackButton /></Link>
            </div>
        </div>
    )
}

export default RegisterPage; 