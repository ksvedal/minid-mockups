
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Password from './pages/PasswordPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/password">Password</Link>
            </li>
          </ul>
        </nav>
        
          <Route path="/password" element={<Password />} />
      
      </div>
    </Router>
  );
};

export default App;









