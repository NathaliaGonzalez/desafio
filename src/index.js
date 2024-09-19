import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Importa Router
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>  {/* Envuelve la app con el Router */}
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();

