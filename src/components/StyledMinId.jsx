import React from 'react';
import { themes } from '../themes.js';

const StyledMinId = ({ changeTheme }) => {
  const applyTheme = (selectedTheme) => {
    changeTheme(selectedTheme);
  };

  return (
    <div className={themes.theme1.background + ' p-4'}>
      <button
        onClick={() => applyTheme('theme1')}
        className="mr-4 p-2 bg-red-500 m-8 bg-red-500 text-white"
      >
        Apply Theme 1
      </button>

      <button
        onClick={() => applyTheme('theme2')}
        className="p-2 bg-yellow-500 bg-pink-400 text-white"
      >
        Apply Theme 2
      </button>
    </div>
  );
};

export default StyledMinId;