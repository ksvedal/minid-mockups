import React from 'react';
import "../index.css"
import NavigationButton from "../components/navigationButton.jsx"
import {Link, useNavigate} from 'react-router-dom';
import {I18nextProvider, useTranslation} from "react-i18next";
import Ocean from "../components/Icons/ocean";

const ValidationSuccessfullPage = ({message}) => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
      <>
        <div className={"flex flex-col items-center justify-center h-screen"}>
            <div className="w-full px-10 flex flex-col items-center">
                <h1 className='py-3'>{message}</h1>
                <NavigationButton text={t('home')} onClick={() => navigate("/.")}/>
            </div>
            <Ocean/>
        </div>
      </>
  );
};

export default ValidationSuccessfullPage;