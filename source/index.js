// Core
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Styles
import './theme/init.css';

// App
import App from './pages/App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);
