import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Password from './pages/PasswordPage';
import Authentication from './pages/AuthenticationPage';
import ContactInfo from './pages/ContactInfoPage';
import ValidationSuccessfull from './pages/ValidationSuccessfullPage';
import LanguageButton from './components/languageButton';
import ActivationLetterPage from './pages/activationLetter/activationLetterPage';
import RegisterPage from './pages/activationLetter/registerUserPage';

//@ts-ignore Case mismatch idk why, it doesn't look wrong and doesn't affect the program
import Switcher from './components/SwitchDarkMode';
import NoActivationLetterPage from "./pages/activationLetter/noActivationLetterPage";
import NoActivationLetterOrderedPage from "./pages/activationLetter/noActivationLetterOrderedPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
          <Router>
            <div className='flex absolute'>
                <Switcher/>
            </div>
              <div  className={"absolute top-4 right-4"}>
                  <LanguageButton />
              </div>
                <div className={"flex items-center justify-center h-screen"}>
                    <div className={"relative dark:bg-custom-very-dark-grey dark:text-white m-auto py-60 bg-white rounded-xl border-custom-light-grey border-2 h-[600px] w-[600px] max-w-screen-md flex flex-col items-center justify-center rounded-sm"}>
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/password" element={<Password />} />
                            <Route path="/authentication" element={<Authentication />} />
                            <Route path="/contactInfo" element={<ContactInfo />} />
                            <Route path="/validationSuccessfull" element={<ValidationSuccessfull />} />
                            <Route path="/noActivationLetter" element={<NoActivationLetterPage />} />
                            <Route path="/noActivationLetterOrdered" element={<NoActivationLetterOrderedPage />} />
                            <Route path="/activationLetter" element={<ActivationLetterPage />} />
                            <Route path="/registerUser" element={<RegisterPage />} />
                        </Routes>
                    </div>
                </div>
          </Router>
  );
};

root.render(<App />);
