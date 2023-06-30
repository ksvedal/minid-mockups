import React from 'react';
import PropTypes from 'prop-types';

const NavigationButton = ({ text = "Neste", onClick }) => {

    const buttonClass = (text === "Tilbake") || (text === "Avbryt") ?
        "p-3 my-2 dark:bg-custom-very-darker-grey dark:text-white text-black border-1 bg-custom-light-grey rounded-full w-full font-semibold" :
        "p-3 my-2 dark:bg-custom-yellow dark:text-black border-1 bg-custom-blue rounded-full text-white w-full font-semibold";

    return (
        <button
            className={buttonClass}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

NavigationButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default NavigationButton;