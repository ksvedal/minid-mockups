import React from "react";
import {Link, useNavigate} from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import InputField from "../../components/InputField";
import NavigationButton from "../../components/NavigationButton";

const RegisterPage = () => {
    const navigate = useNavigate();

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
                <NavigationButton text={"Neste"} onClick={() => navigate("/doneRegisterUser")}/>
                <NavigationButton text={"Avbryt"} onClick={() => navigate("/.")} />
            </div>
        </div>
    )
}

export default RegisterPage; 