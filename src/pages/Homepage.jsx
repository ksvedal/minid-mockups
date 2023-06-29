import React from 'react';
import { useNavigate } from 'react-router-dom';
import NextButton from "../components/NextButton.jsx"
import "../index.css"
import BackButton from '../components/BackButton.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import { useState } from 'react';

const Homepage = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const[errormsg, setErrormsg] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleNextButtonClick = () => {
    if (input.length === 11){
      setErrormsg('');
      navigate("/password");
    }
    else {
      setErrormsg('Fødselsnummer må inneholde 11 siffer');
    }
  }

  return (
      <div className={"flex flex-col items-center justify-center h-screen"}>
      <ProgressBar totalTasks={3} completedTasks={1} />
      <h1>Skriv inn fødselsnummer</h1>
      <input className={"p-3 m-1 bg-white border rounded-full w-full font-semibold"}
      placeholder={"11 tall"} pattern={"[0-9]+"} value={input} onChange={handleInput}>
      </input>
        <div className={"absolute m-10 w-full px-10 bottom-0"}>
        <NextButton onClick={handleNextButtonClick}>
          Neste
        </NextButton>
        <BackButton>
          Tilbake
        </BackButton>
            {errormsg && <p>{errormsg}</p>}

        </div>
    </div>
  );
};

export default Homepage;
