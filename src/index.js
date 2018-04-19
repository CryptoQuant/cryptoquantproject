import React from 'react';
import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from './components';
import registerServiceWorker from './registerServiceWorker';
import './i18n';
import './data/databaseConfig';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'),
);
registerServiceWorker();
