// Core
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

// Styles
import './theme/init.css';

// App
import App from './pages/App';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);
