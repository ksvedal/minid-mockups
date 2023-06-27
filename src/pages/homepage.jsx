import React from 'react';
import { Link } from 'react-router-dom';
import NextButton from "../components/NextButton.jsx"
import "../index.css"
import StyledMinId from '../components/StyledMinId.jsx';
import { useState } from 'react';
import { themes } from '../themes.js';
import InputField from '../components/input.jsx';

const Homepage = () => {
  const [theme, setTheme] = useState("theme1");

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };
  
  return ( 
    <div>
          <h1>Hello</h1>
          <div ClassName={themes[theme].container}>
          <InputField />
          <NextButton>
            <Link to="/password">Neste</Link>
          </NextButton>

          </div>
          
        </div>

    

    
  );
};

export default Homepage;

