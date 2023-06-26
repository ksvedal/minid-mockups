import React from 'react';
import { Link } from 'react-router-dom';
import NextButton from "../components/NextButton.jsx"
import "../index.css"
const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Hello</h1>
      <input type="text" />
      <div>
        <NextButton>
          <Link to="/password">Neste</Link>
        </NextButton>
      </div>
    </div>
  );
};

export default Homepage;
