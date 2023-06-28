import React, {useState, useContext} from 'react';
import {themes} from "../themes";
import StyledMinId from '../components/StyledMinId.jsx';
import { ThemeContext } from '../store/ThemeContext';

const Button = ({ onClick, children }) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <button
      className={themes[theme].button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
