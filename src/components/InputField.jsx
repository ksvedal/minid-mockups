import React, {useContext} from 'react';
import {themes} from "../themes"
import { ThemeContext } from '../store/ThemeContext';

const InputField = ({ placeholder, pattern, type }) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const lastChar = inputValue.slice(-1);
    const regexPattern = pattern ? new RegExp(pattern) : null;

    if (regexPattern && !regexPattern.test(lastChar)) {
      event.target.value = inputValue.slice(0, -1); // Remove the last character from the input value
    }
  };

  return (
    <div>
      <input className={themes[theme].input}
        type={type === 'password' ? 'password' : 'text'} // Set the type to 'password' if it's explicitly provided as prop
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputField;
