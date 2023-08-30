import ReactDOM from 'react-dom/client';
import './index.css';
import Portfolio from './pages/Portfolio';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Portfolio /> 
  </React.StrictMode>
);

