import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux'
import { store } from './store';

import './App.css';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';



function App() {

  return (
      <div className="App">
        <Provider store={store}>
          <Nav />
          
          <Routes>
            <Route path="/index.html" element={<HomePage />} />
            <Route path="/sign-in.html" element={<LoginPage />} />
            <Route path='/profile' element={<UserPage />} />
          </Routes>
          
          <Footer />
        </Provider>
      </div>
  );
}

export default App;