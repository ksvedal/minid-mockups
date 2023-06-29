import React from 'react';
import { Link } from 'react-router-dom';
import NextButton from "../components/NextButton.jsx"
import "../index.css"
import InputField from '../components/InputField.jsx';
import BackButton from '../components/BackButton.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

const Homepage = () => {
  return (
      <>
            <ProgressBar totalTasks={3} completedTasks={1} />
            <h1>Skriv inn fødselsnummer</h1>
            <InputField  placeholder={"11 tall"} pattern={"[0-9]+"} />
        <div className={"absolute m-10 w-full px-10 bottom-0"}>
            <NextButton>
                <Link to="/password">Neste</Link>
            </NextButton>
              <BackButton>Tilbake</BackButton>
        </div>
      </>
  );
};

export default Homepage;
