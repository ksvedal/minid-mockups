import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "../../index.css"
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import ProgressBar from "../../components/ProgressBar";
import NavigationButton from "../../components/NavigationButton";


const SmsPage = ( {linkFrom, linkTo }) => {
    const { t, i18n } = useTranslation()
    const regex = /^[0-9]+$/;
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const [input, setInput] = useState("");
    const[errormsg, setErrormsg] = useState("");

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const handleNextButtonClick = () => {
        if (input.length === 11 && regex.test(input)) {
            navigate(linkTo);
        } else if (input.length === 1) {
            navigate("/activationLetter");
        } else if (input.length === 2) {
            navigate("/noActivationLetter");
        } else {
            setErrormsg(t('errorCombination'));
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ProgressBar totalTasks={3} completedTasks={1} />
            <div className="w-full px-10 flex flex-col items-center">
                <p className="text-center my-4 text-3xl font-semibold text-bold font-sans subpixel-antialiased text-custom-purple dark:text-custom-yellow">{t('enterBirthNumberAndPassword')}</p>

                <input maxLength={11}
                       className="p-3 my-2 w-2/3 focus:shadow-2xl shadow-md subpixel-antialiased focus:outline-none border-transparent ring-3 ring-transparent focus:ring-custom-golden bg-white text-black font-semibold rounded-full border-custom-dark-grey-grey w-full text-center dark:bg-custom-very-darker-grey dark:text-white"
                       placeholder={`11 ${t('numbers')}`} pattern={"[0-9]"} value={input} onChange={handleInput}>
                </input>

                <input
                       className="p-3 my-2 w-2/3 focus:shadow-2xl shadow-md subpixel-antialiased focus:outline-none border-transparent ring-3 ring-transparent focus:ring-custom-golden bg-white text-black font-semibold rounded-full border-custom-dark-grey-grey w-full text-center dark:bg-custom-very-darker-grey dark:text-white"
                       placeholder={`${t('password')}`}>
                </input>

                <Link to="/resetPassword">
                    <p
                        className="text-center m-2 hover:text-custom-golden font-semibold underline text-bold font-sans subpixel-antialiased text-custom-purple dark:text-custom-yellow">
                        {t('forgottenPassword')}
                    </p>
                </Link>
                <p className={"my-2 text-custom-red dark:text-custom-neon-red font-semibold absolute top-40"}>{errormsg && <p> {errormsg}</p >}</p>

                <NavigationButton onClick={handleNextButtonClick}/>
                <NavigationButton text={t('back')} onClick={() => navigate(linkFrom)} />

            </div>
        </div>
    );
};

export default SmsPage;