import React, {useContext} from 'react';
import { ThemeContext } from '../store/ThemeContext';
import {themes} from "../themes";


const InputField = ({placeholder}) => {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
    <div>
      <input className={themes[theme].input}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
