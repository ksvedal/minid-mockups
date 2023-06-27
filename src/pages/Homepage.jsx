import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import NextButton from "../components/NextButton.jsx"
import "../index.css"
import StyledMinId from '../components/StyledMinId.jsx';
import { useState } from 'react';
import { themes } from '../themes.js';
import InputField from '../components/Input.jsx';
import {ThemeContext} from "../store/ThemeContext";

const Homepage = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
    <div>
        <h1>Hello</h1>
        <InputField />
        <NextButton>
            <Link to="/password">Neste</Link>
        </NextButton>
    </div>
  );
};

export default Homepage;

