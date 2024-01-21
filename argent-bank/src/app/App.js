import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';



function App() {

  return (
      <div className="App">

          <Nav />
          
          <Routes>
            <Route path="/index.html" element={<HomePage />} />
            <Route path="/sign-in.html" element={<LoginPage />} />
            <Route path='/user.html' element={<UserPage />} />
          </Routes>
          
          <Footer />
        
      </div>
  );
}

export default App;