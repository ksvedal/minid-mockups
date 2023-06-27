import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Password from './pages/PasswordPage';
import Authentication from './pages/AuthenticationPage';
import ContactInfo from './pages/ContactInfoPage';
import { themes } from './themes.js';
import { useState } from 'react';
import StyledMinId from './components/StyledMinId';
import Switcher from './components/switchDarkMode';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {

  const [theme, setTheme] = useState('theme1');

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <Router>
      <StyledMinId changeTheme={changeTheme} />
      <div className={themes[theme].background}>
      <Switcher />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/password" element={<Password />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/contactInfo" element={<ContactInfo />} />
      </Routes>
    </div>
    </Router>
  );
};

root.render(<App />);
