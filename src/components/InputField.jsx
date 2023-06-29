import React from 'react';

const InputField = ({ placeholder, pattern, type }) => {
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
        className={"p-3 bg-custom-light-grey text-black placeholder-custom-dark-grey m-1 rounded-full w-full font-semibold dark:bg-custom-very-darker-grey dark:text-white"}
        type={type === 'password' ? 'password' : 'text'}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputField;
