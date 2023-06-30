import React from 'react';
import "../index.css"
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const ValidationSuccessfullPage = ({message, linkFrom}) => {
  return (
      <>
        <div className={"flex flex-col items-center justify-center h-screen"}>
          <h1 className='py-3'>{message}</h1>
         </div>
          <div className={"absolute w-full px-10 m-10 bottom-0"}>

              <Link to="/"><NextButton /></Link>
              <Link to={linkFrom}> <BackButton /> </Link>
        </div>
      </>
  );
};

export default ValidationSuccessfullPage;