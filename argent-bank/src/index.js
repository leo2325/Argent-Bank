import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './style/index.css';
import reportWebVitals from './reportWebVitals';

import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/index.html" element={<HomePage />} />
        <Route path="/sign-in.html" element={<LoginPage />} />
        <Route path='/profile' element={<UserPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();