import React from 'react';
import "../index.css"
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';

const ValidationSuccessfullPage = () => {
  return (
    <div>
      <h1 className='py-3'>Gratulerer, du er logget inn!</h1>
      <NextButton>
          <Link to="/">Logg på igjen</Link>
      </NextButton>
    </div>
  );
};

export default ValidationSuccessfullPage;