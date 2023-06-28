import React, {useContext} from 'react';
import "../index.css"
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';
import {themes} from "../themes"
import {ThemeContext} from "../store/ThemeContext";

const ValidationSuccessfullPage = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
    <div>
      <h1 className={themes[theme].header}>Gratulerer, du er logget inn!</h1>
      <NextButton>
          <Link to="/">Logg på igjen</Link>
      </NextButton>
    </div>
  );
};

export default ValidationSuccessfullPage;