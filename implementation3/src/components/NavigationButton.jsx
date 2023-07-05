import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const NavigationButton = ({ text, onClick, position }) => {
  const { t } = useTranslation();
  let containerClass = "absolute w-7/12 bottom-0 text-center";
  let buttonText;

  if (text) {
    buttonText = text;
  } else {
    buttonText = t('next');
  }

  let positionClass;

  switch (position) {
    case 'left':
      positionClass = "left-0 bottom-8";
      break;
    case 'center':
      positionClass = "left-1/2 transform -translate-x-1/2 bottom-12";
      break;
    case 'right':
      positionClass = "right-0 bottom-32";
      break;
    default:
      positionClass = "left-1/2 transform -translate-x-1/2"; // Default to center position
  }

  containerClass += ` ${positionClass}`;

  const buttonClass = "py-5 my-10 dark:bg-custom-yellow bg-custom-blue text-black w-full font-bold text-xl";

  return (
    <div className={containerClass}>
      <button className={buttonClass} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

NavigationButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  position: PropTypes.oneOf(['left', 'center', 'right']),
};

export default NavigationButton;
