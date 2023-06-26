import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
      className="flex items-center justify-center w-533 h-533 px-82.95 py-68.137 gap-29.625 flex-shrink-0 rounded-full border-2.962 border-blue-600 bg-green-700 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
