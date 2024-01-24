import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './app/App.js'

import './style/index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();