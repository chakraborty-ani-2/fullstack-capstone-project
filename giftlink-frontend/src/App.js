import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// COMPONENTS
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Navbar from './components/Navbar/Navbar';

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/app" element={<MainPage />} />
                <Route path="/app/login" element={<LoginPage />} />
                <Route path="/app/register" element={<RegisterPage />} />
            </Routes>
        </>
    );
}
export default App;