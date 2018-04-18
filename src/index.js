import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router-dom';
import './index.css';
import { App } from './components';
import registerServiceWorker from './registerServiceWorker';
import './i18n';
import './data/databaseConfig';

ReactDOM.render(
  <StaticRouter>
    <App />
  </StaticRouter>
  , document.getElementById('root'),
);
registerServiceWorker();
