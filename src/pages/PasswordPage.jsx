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
      navigate("/authentication1");
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
          <div className={"flex flex-col items-center justify-center h-screen"}>

          <h1>Skriv inn passord</h1>
          <input className={"text-black p-3 m-1 bg-white border rounded-full w-auto font-semibold"}
          placeholder={"Passord"} type={"password"} value={input} onChange={handleInput}>
          </input>
          <Link to="/authentication2">
            <h2>Glemt passord</h2>
          </Link>
          {errormessage && <p> {errormessage}</p>}
          </div>
          <div className={"absolute w-full px-10 bottom-0 m-10"}>
            <NextButton onClick={handleClick}>
              Neste
            </NextButton>
            <Link to="/"> <BackButton /> </Link>
        </div>
      </>
  );
};

export default Password;
