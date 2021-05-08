import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="chat-notification">
      <div className="chat-notification-logo-wrapper">
        <img className="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo" />
      </div>
      <div className="chat-notification-content">
        <h4 className="chat-notification-title">ChitChat</h4>
        <p className="chat-notification-message">You have a new message!</p>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

