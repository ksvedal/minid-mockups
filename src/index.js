import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Password from './pages/PasswordPage';
import Authentication from './pages/AuthenticationPage';
import ContactInfo from './pages/ContactInfoPage';
import ValidationSuccessfull from './pages/ValidationSuccessfullPage';
import LanguageButton from './components/languageButton';

//@ts-ignore Case mismatch idk why, it doesn't look wrong and doesn't affect the program
import Switcher from './components/SwitchDarkMode';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
          <Router>
            <div className='flex'>
                <Switcher/>
            </div>
                <div  className={"absolute top-5 right-2"}>
                    <LanguageButton />            
                </div>
                <div className={"flex items-center justify-center mt-12"}>
                    <div className={"relative dark:bg-black dark:text-white py-60 bg-white rounded-xl border-custom-light-grey border-2 h-96 w-96 flex flex-col items-center justify-center rounded-sm"}>
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/password" element={<Password />} />
                            <Route path="/authentication" element={<Authentication />} />
                            <Route path="/contactInfo" element={<ContactInfo />} />
                            <Route path="/validationSuccessfull" element={<ValidationSuccessfull />} />
                        </Routes>
                    </div>
                </div>
          </Router>
  );
};

root.render(<App />);
