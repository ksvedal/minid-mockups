import React, {useContext} from 'react';
import { ThemeContext } from '../store/ThemeContext';

const Input = ({placeholder}) => {
    return (
    <div>
      <input className={"p-3 m-1 dark:bg-custom-very-darker-grey dark:text-white bg-white rounded-full w-full font-semibold"}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
