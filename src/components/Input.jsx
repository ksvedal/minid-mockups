import React, {useContext} from 'react';
import { ThemeContext } from '../store/ThemeContext';

const InputField = ({placeholder}) => {
    return (
    <div>
      <input className={"p-3 m-1 bg-white border rounded-full w-full font-semibold"}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
