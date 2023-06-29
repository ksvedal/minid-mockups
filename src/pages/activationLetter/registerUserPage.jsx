import React from "react";
import { Link } from "react-router-dom";
import NextButton from "../../components/NextButton";

const RegisterPage = () => {
    return (
        <div className={"flex items-center justify-center h-screen"}>
            <h1>Kva skal vere her? Screenshot som på figma?</h1> 
            <div className={"absolute w-full px-10 bottom-0 m-10"}>
            <Link to="/.">
                    <NextButton text={"Heim"}/>
            </Link>
            </div>
        </div>
    )
}

export default RegisterPage; 