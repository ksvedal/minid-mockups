import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PasswordLoginPage from './pages/PasswordLoginPage';
import AuthenticationPage from './pages/AuthenticationPage';
import ContactInfoPage from './pages/ContactInfoPage';
import ValidationSuccessfullPage from './pages/ValidationSuccessfullPage';
import LanguageButton from './components/languageButton';
import ActivationLetterPage from './pages/activationLetter/activationLetterPage';
import RegisterPage from './pages/activationLetter/registerUserPage';
import DoneRegisterPage from './pages/activationLetter/doneRegisterUserPage';
import EmailValidationPage from './pages/forgotPassword/EmailValidationPage';
import "./i18n.js"

//@ts-ignore Case mismatch idk why, it doesn't look wrong and doesn't affect the program
import Switcher from './components/SwitchDarkMode';
import NoActivationLetterPage from "./pages/activationLetter/noActivationLetterPage";
import NoActivationLetterOrderedPage from "./pages/activationLetter/noActivationLetterOrderedPage";
import ResetPasswordPage from './pages/forgotPassword/ResetPasswordPage';
import {useTranslation} from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    const {t} = useTranslation()
  return (
          <Router>
                <div className={"flex items-center justify-center h-screen"}>
                    <div className={"relative dark:bg-custom-very-dark-grey dark:text-white m-auto py-60 bg-custom-bg h-[800px] w-[560px] max-w-screen-md flex flex-col items-center justify-center"}>
                    <div  className={"absolute top-4 right-0"}>
                            <LanguageButton />
                        </div>
                        <div className=' absolute top-4 left-4'>
                            <Switcher/>
                        </div>
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/password" element={<PasswordLoginPage />} />
                            <Route path="/authentication1" element={<AuthenticationPage linkTo={"/contactInfo1"} linkFrom={"/password"} totalTasks={3} completedTasks={3}/>} />
                            <Route path="/authentication2" element={<AuthenticationPage linkTo={"/emailValidation"} linkFrom={"/password"} totalTasks={5} completedTasks={3}/>} />
                            <Route path="/emailValidation" element={<EmailValidationPage />} />
                            <Route path="/resetPassword" element={<ResetPasswordPage/>} />
                            <Route path="/contactInfo1" element={<ContactInfoPage totalTasks={3} linkFrom={"/authentication1"} linkTo={"/validationSuccessfull1"}/>} />
                            <Route path="/contactInfo2" element={<ContactInfoPage  totalTasks={5} linkFrom={"/authentication2"} linkTo={"/validationSuccessfull2"}/>} />
                            <Route path="/validationSuccessfull1" element={<ValidationSuccessfullPage message={t('bravoLoggedIn')} linkFrom={"/contactInfo1"}/>} />
                            <Route path="/validationSuccessfull2" element={<ValidationSuccessfullPage message={t('bravoChangedPassword')} linkFrom={"/contactInfo2"}/>} />
                            <Route path="/noActivationLetter" element={<NoActivationLetterPage />} />
                            <Route path="/noActivationLetterOrdered" element={<NoActivationLetterOrderedPage />} />
                            <Route path="/activationLetter" element={<ActivationLetterPage />} />
                            <Route path="/registerUser" element={<RegisterPage />} />
                            <Route path="/doneRegisterUser" element={<DoneRegisterPage />} />
                        </Routes>
                    </div>
                </div>
          </Router>
  );
};

root.render(<App />);
