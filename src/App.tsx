import React from 'react';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Contact from './views/Contact';
import About from './views/About';
import Login from './views/Login';
import Register from './views/Register';
import { AppHome } from './views/App/Home';
import { AppInvestments } from './views/App/Investments';
import { AppCards } from './views/App/Cards';
import { AppConfig } from './views/App/Config';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/app/" element={<AppHome />} />
                <Route path="/app/investments" element={<AppInvestments />} />
                <Route path="/app/cards" element={<AppCards />} />
                <Route path="/app/config" element={<AppConfig />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
