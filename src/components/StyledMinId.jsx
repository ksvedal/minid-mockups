import React, { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';
import { themes } from '../themes.js';

const StyledMinId = () => {

    const { theme, changeTheme } = useContext(ThemeContext);
    const applyTheme = (selectedTheme) => {
      changeTheme(selectedTheme);
    };

    return (
      <div className={'bg-yellow-50 rounded'}>
        <button
          onClick={() => applyTheme('theme1')}
          className="m-2 p-2 bg-cyan-800 rounded-sm text-white"
        >
          Apply Theme 1
        </button>

        <button
          onClick={() => applyTheme('theme2')}
          className="m-2 p-2 bg-cyan-800 rounded-sm text-white"
        >
          Apply Theme 2
        </button>
          <button
              onClick={() => applyTheme('theme3')}
              className="m-2 p-2 bg-cyan-800 rounded-sm text-white"
          >
              Apply Theme 3
          </button>
      </div>
    );
};

export default StyledMinId;