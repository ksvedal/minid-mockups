import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Password from './pages/PasswordPage';
import Authentication from './pages/AuthenticationPage';
import ContactInfo from './pages/ContactInfoPage';
import { themes } from './themes.js';
import { useState } from 'react';
import StyledMinId from './components/StyledMinId';
import { ThemeContext } from './store/ThemeContext';
import ValidationSuccessfull from './pages/ValidationSuccessfullPage';

//@ts-ignore Case mismatch idk why, it doesn't look wrong and doesn't affect the program
import Switcher from './components/SwitchDarkmode';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {

  const [theme, setTheme] = useState('theme1');

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
      <ThemeContext.Provider value={{ theme, changeTheme }}>
          <Router>
            <div className='flex'>
                <StyledMinId />
                <Switcher/>
            </div>            
                <div className={themes[theme].mainContainer}>
                    <div className={themes[theme].container}>
                        
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
      </ThemeContext.Provider>
  );
};

root.render(<App />);
