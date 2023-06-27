import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Password from './pages/PasswordPage';
import Authentication from './pages/AuthenticationPage';
import ContactInfo from './pages/ContactInfoPage';
import ValidationSuccessfull from './pages/ValidationSuccessfullPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/password" element={<Password />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/contactInfo" element={<ContactInfo />} />
        <Route path="/validationSuccessfull" element={<ValidationSuccessfull />} />
      </Routes>
    </Router>
  );
};

root.render(<App />);
