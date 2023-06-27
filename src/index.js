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
import Switcher from './components/switchDarkMode';
import { ThemeContext } from './store/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {

  const [theme, setTheme] = useState('theme1');

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
      <ThemeContext.Provider value={{ theme, changeTheme }}>
          <Router>
              <StyledMinId />
                <div className={themes[theme].mainContainer}>
                    <div className={themes[theme].container}>
                        <Switcher />
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/password" element={<Password />} />
                            <Route path="/authentication" element={<Authentication />} />
                            <Route path="/contactInfo" element={<ContactInfo />} />
                        </Routes>
                    </div>
                </div>
          </Router>
      </ThemeContext.Provider>
  );
};

root.render(<App />);
