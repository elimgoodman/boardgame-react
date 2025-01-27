import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Client from './Client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Client playerID="0" />
  </React.StrictMode>
);
