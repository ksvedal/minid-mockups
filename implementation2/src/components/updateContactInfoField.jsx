import React, { useState } from 'react';
import {useTranslation} from "react-i18next";

const UpdateContactInfoField = ({ placeholder, pattern }) => {
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
        className="p-3 bg-custom-light-grey text-black placeholder-custom-dark-grey m-1 px-10 rounded-full w-full font-semibold "
        type="text"
        placeholder={isEditing ? '' : placeholder}
        value={value}
        onChange={handleInputChange}
        readOnly={!isEditing}
      />
      {!isEditing && (
        <button className="p-3 my-2 ml-1 dark:text-black border-1 bg-custom-blue rounded-full
        text-white font-semibold"
                onClick={handleEdit}>
          {t('change')}
        </button>
      )}
      {isEditing && (
        <button className="p-3 my-2 ml-1  dark:text-black border-1 bg-custom-blue rounded-full
        text-white font-semibold"
                onClick={handleSave}>
          {t('save')}
        </button>
      )}
    </div>
  );
};

export default UpdateContactInfoField;
