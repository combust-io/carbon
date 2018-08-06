import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TODO:</h1>
        </header>

          <ul>
              <li>add living style guide</li>
              <li>add library build in webpack</li>
              <li>add eslinting rules / coding standards</li>
              <li>... this is quick and dirty for component sandbox testing</li>
          </ul>
      </div>
    );
  }
}

export default App;
