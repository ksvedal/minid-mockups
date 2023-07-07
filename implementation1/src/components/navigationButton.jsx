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
        "p-3 my-2 dark:bg-custom-very-darker-grey dark:text-white text-black border-1 bg-custom-light-grey rounded-full w-full font-semibold" :
        "p-3 my-2 dark:bg-custom-yellow dark:text-black border-1 bg-custom-blue rounded-full text-white w-full font-semibold";

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