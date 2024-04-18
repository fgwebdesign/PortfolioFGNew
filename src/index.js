import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/components/Translate/i18n'; 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
