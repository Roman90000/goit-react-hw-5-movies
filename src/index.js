import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="https://github.com/Roman90000/goit-react-hw-5-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
