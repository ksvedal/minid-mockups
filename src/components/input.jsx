import React from 'react';

const InputField = () => {
  return (
    <div className="flex items-center justify-center w-300px h-200 px-28 py-23 gap-10">
      <input
        className="flex-shrink-0 w-full h-full rounded-full border border-gray-400 bg-gray-200 px-4 py-2"
        type="text"
        placeholder="Enter your text"
      />
    </div>
  );
};

export default InputField;
