import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import {
  Footer,
  Header,
  Home,
} from '../';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}


export default App;
