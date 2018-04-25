import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import './landing.css';

import storage from '../../data/storage';
import i18n from '../../i18n';

class Landing extends Component {
  constructor() {
    super();

    this.state = {};

    this.emailChange = this.emailChange.bind(this);
    this.saveEmail = this.saveEmail.bind(this);
  }

  emailChange(event) {
    const { target } = event;
    const { value } = target;

    this.setState({
      email: value,
    });
  }

  saveEmail(event) {
    event.preventDefault();
    const { email } = this.state;
    return email && storage.addEmail(email)
      .then(() =>
        toast('OK', {
          autoClose: 1500,
          position: toast.POSITION.BOTTOM_CENTER,
        }));
  }

  render() {
    const sharingUrl = window.location.toString();
    const { email } = this.state;
    return (
      <I18n>
        {
          t => (
            <div className="App-landing">
              <div className="App-landing__header">
                <div className="language-selection dropdown">
                  <div className="selected">
                    {i18n.language && i18n.language.toUpperCase()}
                  </div>
                  <div className="dropdown-content">
                    <button onClick={() => i18n.language !== 'en' && i18n.changeLanguage('en')}>EN</button>
                    <button onClick={() => i18n.language !== 'zh' && i18n.changeLanguage('zh')}>ZH</button>
                    <button onClick={() => i18n.language !== 'ru' && i18n.changeLanguage('ru')}>RU</button>
                  </div>
                </div>
                <div className="social-toolbar">
                  <span className="button icon">
                    <FacebookShareButton url={sharingUrl}>
                      <i className="fab fa-facebook" />
                      { t('share') }
                    </FacebookShareButton>
                  </span>
                  <span className="button icon">
                    <TwitterShareButton url={sharingUrl}>
                      <i className="fab fa-twitter" />
                      { t('tweet') }
                    </TwitterShareButton>
                  </span>

                  <span className="button icon">
                    <EmailShareButton url={sharingUrl}>
                      <i className="far fa-envelope" />
                      { t('email') }
                    </EmailShareButton>
                  </span>
                </div>
              </div>
              <div className="App-landing__content">
                <div className="project-name">
                  <div className="project-name__logo">
                    Bluequant
                  </div>
                </div>
                <div className="main-text">
                  { t('project-subject') }
                </div>

                <div className="subscrite-label">
                  { t('invitation-message') }
                </div>

                <div className="subscribe-section">
                  <form onSubmit={this.saveEmail}>
                    <input type="email" onChange={this.emailChange} />
                    <button className="button" type="submit" disabled={!email}>
                      { t('notify-me') }
                    </button>
                  </form>
                </div>
              </div>
              <ToastContainer />
            </div>
          )
        }
      </I18n>
    );
  }
}

export default Landing;
