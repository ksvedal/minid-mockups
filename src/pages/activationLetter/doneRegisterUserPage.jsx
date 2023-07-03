import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import NavigationButton from "../../components/NavigationButton";

const DoneRegisterPage = () => {
    return (
        <div className={"flex flex-col items-center justify-center"}>
        <ProgressBar totalTasks={4} completedTasks={4} />
        <p className="p-5 text-2xl">Velkommen som MinID bruker</p>
        <p>Din bruker er nå opprettet. Du vil nå kunne logge inn til digitale tjenester fra det offentlige.</p>
        <div className={"absolute w-1/2 px-10 bottom-0 m-10"}>
            <Link to="/."><NavigationButton text={"Hjem"}/></Link>
            </div>
        </div>
    )
}

export default DoneRegisterPage; 