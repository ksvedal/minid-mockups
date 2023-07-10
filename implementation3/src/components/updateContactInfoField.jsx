import React, { useState } from 'react';
import {useTranslation} from "react-i18next";

const UpdateContactInfoField = ({ placeholder, pattern, autofocus }) => {
  const {t} = useTranslation()
  const [value, setValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const lastChar = inputValue.slice(-1);
    const regexPattern = pattern ? new RegExp(pattern) : null;

    if (regexPattern && !regexPattern.test(lastChar)) {
      event.target.value = inputValue.slice(0, -1); // Remove the last character from the input value
    } else {
      setValue(inputValue);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex items-center">
      <input
        className="p-3 bg-custom-white text-custom-black placeholder-custom-darkgrey m-1 px-10 w-full font-semibold border-2 border-custom-lightgrey"
        type="text"
        placeholder={isEditing ? '' : placeholder}
        value={value}
        onChange={handleInputChange}
        readOnly={!isEditing}
        autoFocus={autofocus}
      />
      {!isEditing && (
        <button className="p-3 my-4 ml-1 dark:bg-custom-yellow bg-custom-blue 
        text-custom-black font-semibold border-2 border-custom-blue dark:border-custom-yellow"
                onClick={handleEdit}>
          {t('change')}
        </button>
      )}
      {isEditing && (
        <button className="p-3 my-4 ml-1 dark:bg-custom-yellow bg-custom-blue 
        text-custom-black font-semibold border-2 border-custom-blue dark:border-custom-yellow"
                onClick={handleSave}>
          {t('save')}
        </button>
      )}
    </div>
  );
};

export default UpdateContactInfoField;
