// Core
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Styles
import './theme/init.css';

// Index
import Index from './navigation';

render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
  document.getElementById('app'),
);
