import React, { useState } from 'react';
import InputField from '../components/InputField.jsx';
import NextButton from "../components/NextButton.jsx"
import { Link, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

const Password = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [errormessage, setErrormessage] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    if (input.length !== 0){
      setErrormessage("");
      navigate("/authentication");
    }
    else {
      setErrormessage("Feil passord inntastet");
    }
  }

  return (
      <>
      <div className={"flex flex-col items-center justify-center h-screen"}>
        <ProgressBar totalTasks={3} completedTasks={2} />
      </div>
          <h1>Skriv inn passord</h1>
          <input className={"text-black p-3 m-1 bg-white border rounded-full w-auto font-semibold"}
          placeholder={"Passord"} type={"password"} value={input} onChange={handleInput}>
          </input>
          {errormessage && <p> {errormessage}</p>}
          <div className={"absolute w-full px-10 bottom-0 m-10"}>
            <NextButton onClick={handleClick}>
              Neste
            </NextButton>
            <BackButton>
                <Link to="/.">Tilbake</Link>
            </BackButton>
        </div>
      </>
  );
};

export default Password;
