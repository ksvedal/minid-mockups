import React from 'react';
import { Link } from 'react-router-dom';
import NextButton from "../components/NextButton.jsx"
import "../index.css"
import StyledMinId from '../components/StyledMinId.jsx';
import { useState } from 'react';
import { themes } from '../themes.js';
import InputField from '../components/input.jsx';

const Homepage = () => {
  const [theme, setTheme] = useState("theme2");

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };
  
  return ( 
    <div className={themes[theme].background}>
      <StyledMinId changeTheme={changeTheme}/>
      <div>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1>Hello</h1>
          <InputField />
          <NextButton>
            <Link to="/password">Neste</Link>
          </NextButton>
        </div>
      </div>
    </div> 
    
  );
};

export default Homepage;

