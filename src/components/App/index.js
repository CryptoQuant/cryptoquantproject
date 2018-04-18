import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import {
  Footer,
  Header,
  Landing,
} from '../';

function App() {
  const isLanding = true;
  return (
    <div className="App">
      { !isLanding && <Header /> }
      <div className="App-body">
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
      { !isLanding && <Footer /> }
    </div>
  );
}


export default App;
