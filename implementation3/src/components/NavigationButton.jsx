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
        "py-5 my-10 dark:bg-custom-very-darker-grey dark:text-white text-black border-1 bg-custom-light-grey w-full font-semibold " :
        "py-5 my-10 dark:bg-custom-yellow dark:text-black border-1 bg-custom-blue text-white w-full font-semibold ";

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