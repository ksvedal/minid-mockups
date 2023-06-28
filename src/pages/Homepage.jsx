import React from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import NextButton from "../components/NextButton.jsx"
import "../index.css"
import InputField from '../components/InputField.jsx';
import BackButton from '../components/BackButton.jsx';

import ProgressBar from '../components/ProgressBar.jsx';

import { useState } from 'react';


const Homepage = () => {
  const navigate = useNavigate(); 

  const [input, setInput] = useState("");
  const[errormsg, setErrormsg] = useState("");

  const handleInput = (event) => {
    console.log(event.target.value)
    setInput(event.target.value); 
  };

  
  const handleNextButtonClick = () => {
    if (input.length === 11){
      setErrormsg('');
      navigate("/password"); 
    } 
    else {
      console.log('Must have 11 digits');
      setErrormsg('Fødselsnummer må inneholde 11 siffer');
    }
  }

  return (
    <div>
      <ProgressBar totalTasks={3} completedTasks={1} />
      <h1>Skriv inn fødselsnummer</h1>
      <input className={"p-3 m-1 bg-white border rounded-full w-full font-semibold"} 
      placeholder={"11 tall"} pattern={"[0-9]+"} value={input} onChange={handleInput}>
      </input>  
      <div>
        <NextButton onClick={handleNextButtonClick}>
          Neste
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
