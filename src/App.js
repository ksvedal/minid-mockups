import React, { useState } from 'react';
import Hello from "./components/Hello";
import StyledMinId from "./components/StyledMinId";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Password from './pages/PasswordPage';

function App() {

    return (
        <Router>
            <div>
                <StyledMinId />
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
        </Router>)
}

export default App;