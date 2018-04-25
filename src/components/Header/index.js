import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <div className="App-header__logo">
        <i className="fas fa-cloud" /> Bluequant
      </div>
      <div className="App-header__menu">
        <div className="header-link">
          <NavLink exact to="/">Home</NavLink>
        </div>
        <div className="header-link">
          <NavLink exact to="/about">About Us</NavLink>
        </div>
        <div className="header-link">
          <NavLink exact to="/contact">Contact Us</NavLink>
        </div>
        <div className="header-link">
          <NavLink exact to="/careers">Careers</NavLink>
        </div>
        <button>Sign In</button>
      </div>
    </header>
  );
}

export default withRouter(Header);
