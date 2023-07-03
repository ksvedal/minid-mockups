import React, { useRef } from 'react';

const SmallInputField = ({ placeholder, onChange, ref}) => {
  const inputRef = useRef(null);
  ref.current = inputRef;

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    event.target.value = inputValue.slice(0, 1); // Keep only the first character
    onChange(inputValue);
    if (inputValue.length === 1) {
      focusNext();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Backspace' && event.target.value === '') {
      focusPrevious();
    }
  };

  const focusNext = () => {
    inputRef.current.nextSibling?.focus();
  };

  const focusPrevious = () => {
    inputRef.current.previousSibling?.focus();
  };

  return (
    <input
      ref={inputRef}
      placeholder={placeholder}
      pattern="[a-zA-Z0-9]"
      maxLength={1}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      className="py-6 mb-4 w-11 h-11 bg-custom-light-grey text-black rounded-full border-custom-dark-grey-grey text-center dark:bg-custom-very-darker-grey dark:text-white"
    />
  );
};

export default SmallInputField;
