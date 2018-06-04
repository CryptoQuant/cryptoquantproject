import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import './Header.css';
import i18n from "../../i18n";

function Header() {
  return (
    <header className="App-header">
      <div className="App-header__logo">
        LOGO
      </div>
      <div className="App-header__menu">
        <div className="header-link">
          <NavLink exact to="/">Home</NavLink>
        </div>
        <div className="header-link">
          <NavLink exact to="/about">Exchange</NavLink>
        </div>
        <div className="header-link">
          <NavLink exact to="/contact">Wallet</NavLink>
        </div>
        <div className="option-selection dropdown">
          <div className="selected">
            More
          </div>
          <div className="dropdown-content">
            <button>API</button>
            <button>Fees</button>
            <button>Token listing</button>
            <button>Support</button>
          </div>
        </div>
      </div>
      <div className="App-header__options">
        <div className="option-selection dropdown">
          <div className="selected">
            USD
          </div>
          <div className="dropdown-content">
            <button>USD</button>
            <button>CNY</button>
            <button>EUR</button>
          </div>
        </div>

        <div className="option-selection dropdown">
          <div className="selected">
            English
          </div>
          <div className="dropdown-content">
            <button>English</button>
            <button>Chinese</button>
            <button>Russian</button>
          </div>
        </div>
      </div>
      <div className="App-header__account">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
}

export default withRouter(Header);
