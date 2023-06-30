import React from 'react';
import "../index.css"
import NavigationButton from "../components/NavigationButton.jsx"
import {Link, useNavigate} from 'react-router-dom';

const ValidationSuccessfullPage = ({message}) => {
    const navigate = useNavigate();

    return (
      <>
        <div className={"flex flex-col items-center justify-center h-screen"}>
          <h1 className='py-3'>{message}</h1>
         </div>
          <div className={"absolute w-full px-10 m-10 bottom-0"}>
              <NavigationButton text={"Okidoki"} onClick={() => navigate("/.")}/>
        </div>
      </>
  );
};

export default ValidationSuccessfullPage;