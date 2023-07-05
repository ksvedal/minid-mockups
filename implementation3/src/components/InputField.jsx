import React from 'react';

const InputField = ({ placeholder, pattern, type, autofocus }) => {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const lastChar = inputValue.slice(-1);
    const regexPattern = pattern ? new RegExp(pattern) : null;

    if (regexPattern && !regexPattern.test(lastChar)) {
      event.target.value = inputValue.slice(0, -1);
    }
  };

  return (
    <div>
      <input
        autoFocus={autofocus}
        className={"p-3 bg-custom-white text-custom-black dark:text-custom-white placeholder-custom-dark-grey border-2 border-custom-lightgrey mt-2 mb-6 w-full font-semibold"}
        type={type === 'password' ? 'password' : 'text'}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputField;
