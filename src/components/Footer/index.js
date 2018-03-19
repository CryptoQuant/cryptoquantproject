import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="row">
        <div className="column logo">
          <i className="fas fa-cloud" /> Quant
        </div>
        <div className="column links">
          <h3>Links</h3>
          <ul>
            <li>Home</li>
            <li>How it works</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="column discover">
          <h3>Discover</h3>
          <ul>
            <li>About</li>
            <li>Our Services</li>
            <li>Blog Posts</li>
            <li>Help Center</li>
            <li>Policies</li>
          </ul>
        </div>
        <div className="column follow-us">
          <h3>Follow us</h3>
          <ul>
            <li><i className="fab fa-facebook" /></li>
            <li><i className="fab fa-youtube" /></li>
            <li><i className="fab fa-vimeo" /></li>
            <li><i className="fab fa-twitter" /></li>
            <li><i className="fab fa-linkedin" /></li>
          </ul>
        </div>
        <div className="column mailing-list">
          <h3>Mailing List</h3>
          <div className="text" >Signup for our mailing list to get latest updates and news</div>
          <div className="input-group">
            <input type="text" placeholder="Enter your email" />
            <button>Send</button>
          </div>
        </div>
      </div>
      <div className="row copyright">Copyright 2018 QUANT. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
