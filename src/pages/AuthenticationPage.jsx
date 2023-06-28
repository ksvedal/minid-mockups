import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import NextButton from "../components/NextButton.jsx"
import "../index.css"
import SmallInputField from '../components/SmallInputField.jsx';
import {ThemeContext} from "../store/ThemeContext";
import {themes} from "../themes"

const AuthenticationPage = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
    <div>
      <img src="/images/grey_smartphone.jpg" width="100px" alt="Grey Smartphone" />
      <h1>Skriv inn engangskode fra sms</h1>
      <div className={themes[theme].smallInputField}>
        <SmallInputField placeholder={"1"} pattern={"[0-9]"} />
        <SmallInputField placeholder={"2"} pattern={"[0-9]"} />
        <SmallInputField placeholder={"3"} pattern={"[0-9]"} />
        <SmallInputField placeholder={"4"} pattern={"[0-9]"} />
      </div>
      <NextButton>
        <Link to="/contactInfo">Neste</Link>
      </NextButton>
    </div>
  );
};

export default AuthenticationPage;