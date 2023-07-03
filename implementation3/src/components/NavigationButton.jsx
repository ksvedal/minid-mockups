import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const NavigationButton = ({ text, onClick }) => {
    const { t } = useTranslation();
    let buttonText;

    if (text) {
        buttonText = text
    } else {
        buttonText = t('next')
    }

    const buttonClass = (text === t('back')) || (text === t('cancel')) ?
        "py-5 my-10 dark:bg-custom-yellow text-black bg-custom-blue w-full font-bold text-xl " :
        "py-5 my-10 dark:bg-custom-yellow bg-custom-blue text-black w-full font-bold text-xl";

    return (
        <button
            className={buttonClass}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
};

NavigationButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default NavigationButton;