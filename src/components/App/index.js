import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './App.css';
import {
  Footer,
  Header,
  Home,
  Landing,
} from '../';

function App(props) {
  const isLanding = /\/landing/.test(window.location.pathname);
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta description="A cryptocurrency community for Investors and data scientist" />
        <meta keywords="cryptocurrency, cryptocurrency community, blockchain" />
        <title>Blue Quant - A cryptocurrency community for Investors and data scientist</title>
      </Helmet>
      { !isLanding && <Header /> }
      <div className="App-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/landing" component={Landing} />
        </Switch>
      </div>
      { !isLanding && <Footer /> }
    </div>
  );
}


export default App;
