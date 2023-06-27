import React from 'react';

const InputField = ({ placeholder, pattern, type }) => {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const lastChar = inputValue.slice(-1);
    const regexPattern = pattern ? new RegExp(pattern) : null;

    if (regexPattern && !regexPattern.test(lastChar)) {
      event.target.value = inputValue.slice(0, -1); // Remove the last character from the input value
    }
  };

  return (
    <div className={`flex items-center justify-center w-1/2 h-200 px-1 py-2`}>
      <input
        className={`flex-shrink-0 w-1/2 min-w-[160px] max-w-[200px] h-full rounded-full border border-gray-400 bg-gray-200 px-4 py-2 `}
        type={type === 'password' ? 'password' : 'text'} // Set the type to 'password' if it's explicitly provided as prop
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputField;
