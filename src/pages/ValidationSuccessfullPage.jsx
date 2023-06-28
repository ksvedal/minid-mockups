import React from 'react';
import "../index.css"
import NextButton from "../components/NextButton.jsx"
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';



const ValidationSuccessfullPage = () => {
  return (
    <div>
      <h1 className='py-3'>Gratulerer, du er logget inn!</h1>
      <NextButton>
          <Link to="/">Logg på igjen</Link>
      </NextButton>
      <BackButton>
      <Link to="/contactInfo">Tilbake</Link>
      </BackButton>
    </div>
  );
};

export default ValidationSuccessfullPage;