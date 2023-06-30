import React from 'react';
import "../index.css"
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const ValidationSuccessfullPage = () => {
  return (
      <>
        <div className={"flex flex-col items-center justify-center h-screen"}>
          <h1 className='py-3'>Gratulerer, du er logget inn!</h1>
         </div>
          <div className={"absolute w-1/2 px-10 m-10 bottom-0"}>
              <Link to="/"><NextButton /></Link>
              <Link to="/contactInfo"> <BackButton /> </Link>
        </div>
      </>
  );
};

export default ValidationSuccessfullPage;