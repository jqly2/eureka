import React, { Component } from 'react';
import Header from './components/content/header.js';
import Main from './components/content/main.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;



// WEBPACK FOOTER //
// ./src/App.js