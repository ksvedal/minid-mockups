import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import PhoneImage from "../../images/grey_smartphone.jpg";
import {useTranslation} from "react-i18next";
import ProgressBar from "../../components/progressBar";
import NavigationButton from "../../components/navigationButton";

const SmsAuthenticationPage = ({linkFrom, linkTo, completedTasks, totalTasks}) => {
    const {t} = useTranslation()
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState(['', '', '', '', '']);
    const [errorMessage, setErrorMessage] = useState('');

    const inputRefs = useRef([]);

    const handleInputChange = (index, event) => {
        const inputValue = event.target.value;

        if (inputValue.length > 1) {
            event.target.value = inputValue.slice(0, 1); // Keep only the first character
        }

        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);
        setErrorMessage('');

        if (inputValue.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus(); // Move focus to the next input
        }
    };

    const handleNextClick = () => {
        const isAnyFieldEmpty = inputValues.some((value) => value === '');
        if (isAnyFieldEmpty) {
            setErrorMessage(t('wrongAuthenticationCodeEntered'));
            return;
        }
        navigate(linkTo);
    };

    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && event.target.value === '') {
            if (index > 0) {
                inputRefs.current[index - 1].focus(); // Move focus to the previous input
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ProgressBar totalTasks={3} completedTasks={1} />
            <div className="w-full px-10 flex flex-col items-center">
                <div className="flex items-center justify-center">
                    <img className="pb-5" src={PhoneImage} width="250px" alt="Grey Smartphone" />
                </div>
                <p className="text-center my-4 text-xl font-semibold text-bold font-sans subpixel-antialiased text-custom-purple dark:text-custom-red">{t('enterAuthenticationCodeFromSms')}</p>
                <div className="my-4 flex items-center justify-center space-x-4">
                    <input
                        ref={(ref) => inputRefs.current[0] = ref} // Store the input reference in inputRefs.current[0]
                        placeholder=""
                        pattern="[a-zA-Z0-9]"
                        maxLength={1}
                        onChange={(event) => handleInputChange(0, event)}
                        onKeyDown={(event) => handleKeyDown(0, event)}
                        className="py-6 shadow-md subpixel-antialiased focus:outline-none border-transparent ring-4 ring-transparent focus:shadow-2xl w-16 h-16 bg-white text-black font-semibold rounded-full border-custom-dark-grey-grey text-center"
                    />
                    <input
                        ref={(ref) => inputRefs.current[1] = ref}
                        placeholder=""
                        pattern="[a-zA-Z0-9]"
                        maxLength={1}
                        onChange={(event) => handleInputChange(1, event)}
                        onKeyDown={(event) => handleKeyDown(1, event)}
                        className="py-6 shadow-md subpixel-antialiased focus:outline-none border-transparent ring-4 ring-transparent focus:shadow-2xl w-16 h-16 bg-white text-black font-semibold rounded-full border-custom-dark-grey-grey text-center"
                    />
                    <input
                        ref={(ref) => inputRefs.current[2] = ref}
                        placeholder=""
                        pattern="[a-zA-Z0-9]"
                        maxLength={1}
                        onChange={(event) => handleInputChange(2, event)}
                        onKeyDown={(event) => handleKeyDown(2, event)}
                        className="py-6 shadow-md subpixel-antialiased focus:outline-none border-transparent ring-4 ring-transparent focus:shadow-2xl w-16 h-16 bg-white text-black font-semibold rounded-full border-custom-dark-grey-grey text-center"
                    />
                    <input
                        ref={(ref) => inputRefs.current[3] = ref}
                        placeholder=""
                        pattern="[a-zA-Z0-9]"
                        maxLength={1}
                        onChange={(event) => handleInputChange(3, event)}
                        onKeyDown={(event) => handleKeyDown(3, event)}
                        className="py-6 shadow-md subpixel-antialiased focus:outline-none border-transparent ring-4 ring-transparent focus:shadow-2xl w-16 h-16 bg-white text-black font-semibold rounded-full border-custom-dark-grey-grey text-center"
                    />
                    <input
                        ref={(ref) => inputRefs.current[4] = ref}
                        placeholder=""
                        pattern="[a-zA-Z0-9]"
                        maxLength={1}
                        onChange={(event) => handleInputChange(4, event)}
                        onKeyDown={(event) => handleKeyDown(4, event)}
                        className="py-6 shadow-md subpixel-antialiased focus:outline-none border-transparent ring-4 ring-transparent focus:shadow-2xl w-16 h-16 bg-white text-black font-semibold rounded-full border-custom-dark-grey-grey text-center"
                    />
                </div>
                <p className={"my-2 text-custom-red dark:text-custom-neon-red font-semibold absolute top-40"}>{errorMessage && <p> {errorMessage}</p >}</p>
            </div>
            <NavigationButton onClick={handleNextClick} />
            <NavigationButton text={t('cancel')} onClick={() => navigate(linkFrom)} />
        </div>
    );
};

export default SmsAuthenticationPage;
