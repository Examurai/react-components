import React, { Component } from 'react';
import Router from './routes';
import './assets/common.css';
import './assets/fonts.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
