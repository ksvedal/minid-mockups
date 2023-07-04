import React from 'react';
import "../index.css"
import Mountains from '../components/Icons/Mountains';
import NavigationButton from "../components/NavigationButton.jsx"
import {useNavigate} from 'react-router-dom';
import {useTranslation} from "react-i18next";

const ValidationSuccessfullPage = ({message}) => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
      <>
        <div className={"flex flex-col items-center justify-center h-screen"}>
          <h1 className='py-3'>{message}</h1>
         </div>

         <Mountains />
          <div className={"absolute w-1/2 px-10 m-10 bottom-0"}>
              <NavigationButton text={t('home')} onClick={() => navigate("/.")}/>
        </div>
      </>
  );
};

export default ValidationSuccessfullPage;