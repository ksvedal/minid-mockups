import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Password from './pages/PasswordPage';
import Authentication from './pages/AuthenticationPage';
import ContactInfo from './pages/ContactInfoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/password" element={<Password />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/contactInfo" element={<ContactInfo />} />
      </Routes>
    </Router>
  );
};

root.render(<App />);
