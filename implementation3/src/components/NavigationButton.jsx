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
        "p-5 my-4 text-custom-black bg-custom-blue w-full font-bold dark:bg-custom-yellow" :
        "p-5 my-4 text-custom-black bg-custom-blue w-full font-bold dark:bg-custom-yellow";

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