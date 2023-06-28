import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NextButton from "../components/NextButton.jsx"
import "../index.css"
import InputField from '../components/InputField.jsx';
import BackButton from '../components/BackButton.jsx';

import ProgressBar from '../components/ProgressBar.jsx';

import { useState } from 'react';


const Homepage = () => {
  const navigate = useNavigate(); 

  const[input, setInput] = useState("");
  const[errormsg, setErrormsg] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value); 
  };

  const handleNextButtonClick = () => {
    if (input.length === 11){
      console.log('Success, next page!');
      navigate('/.password');
    } 
    else {
      console.log('Wrong');
      setErrormsg('Fødselsnummer på inneholde 11 siffer');
    }
  }

  return (
    <div>
      <ProgressBar totalTasks={3} completedTasks={1} />
      <h1>Skriv inn fødselsnummer</h1>
      <InputField  placeholder={"11 tall"} pattern={"[0-9]+"} value={input} onChange={handleInput} />
      <div>
        <NextButton onClick={handleNextButtonClick}>
          <Link to="/password">Neste</Link>
        </NextButton>
        <BackButton>
          Tilbake
        </BackButton>
      </div>
      {errormsg && <p>{errormsg}</p>}
    </div>
  );
};

export default Homepage;
