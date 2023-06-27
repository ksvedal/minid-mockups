import React from 'react';
import { Link } from 'react-router-dom';
import NextButton from "../components/NextButton.jsx"
import "../index.css"
import InputField from '../components/Input.jsx';
import {themes} from "../themes";


const Homepage = () => {
  return (
    <div>
      <h1>Skriv inn fødselsnummer</h1>
      <InputField  placeholder={"11 tall"} />
      <div>
        <NextButton>
          <Link to="/password">Neste</Link>
        </NextButton>
      </div>
    </div>
  );
};

export default Homepage;
