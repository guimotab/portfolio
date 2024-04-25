import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import AppRouter from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppRouter /> 
  </React.StrictMode>
);
