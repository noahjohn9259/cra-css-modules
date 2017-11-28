import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <div styleName="header">
          <img src={logo} styleName="logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p styleName="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
