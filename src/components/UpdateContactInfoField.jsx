import React, { useState } from 'react';

const UpdateContactInfoField = ({ placeholder, pattern }) => {
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
        className="p-3 bg-custom-light-grey text-black placeholder-custom-dark-grey m-1 rounded-full w-full font-semibold dark:bg-custom-very-darker-grey dark:text-white"
        type="text"
        placeholder={isEditing ? '' : placeholder}
        value={value}
        onChange={handleInputChange}
        readOnly={!isEditing}
      />
      {!isEditing && (
        <button className="p-3 my-2 ml-1 dark:bg-custom-yellow dark:text-black border-1 bg-custom-blue rounded-full
        text-white font-semibold"
                onClick={handleEdit}>
          Endre
        </button>
      )}
      {isEditing && (
        <button className="p-3 my-2 ml-1 dark:bg-custom-yellow dark:text-black border-1 bg-custom-blue rounded-full
        text-white font-semibold"
                onClick={handleSave}>
          Lagre
        </button>
      )}
    </div>
  );
};

export default UpdateContactInfoField;
