// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // important
import App from './App'; // your main app file
import './index.css'; // Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* WRAP App inside BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);