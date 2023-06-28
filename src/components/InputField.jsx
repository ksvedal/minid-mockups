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
    <div>
      <input
<<<<<<< HEAD
        className={"text-black p-3 m-1 bg-grey border rounded-full w-full font-semibold"}
=======
        className={"text-black p-3 m-1 bg-white border rounded-full w-full font-semibold"}
>>>>>>> de83d686ad05e101b7dfbacf490baaf8c352ec78
        type={type === 'password' ? 'password' : 'text'} // Set the type to 'password' if it's explicitly provided as prop
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputField;
