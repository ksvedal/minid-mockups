import React, {useContext} from 'react';
import {themes} from "../themes";
import {ThemeContext} from "../store/ThemeContext";
import StyledMinId from '../components/StyledMinId.jsx';


const InputField = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
    <div>
      <input
        className={themes[theme].input}
        type="text"
        placeholder="Enter your text"
      />
    </div>
  );
};

export default InputField;
