import React from 'react';
import "../index.css"
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';



const ValidationSuccessfull = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className='py-3'>Gratulerer, du er logget inn!</h1>
      <NextButton>
          <Link to="/">Logg på igjen</Link>
      </NextButton>
    </div>
  );
};

export default ValidationSuccessfull;