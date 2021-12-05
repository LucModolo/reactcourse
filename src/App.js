import React, { Component } from 'react';
import Button from "./Button";
import Panel from "./Panel.js"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-heading">Welcome to React!!!</h2>

        </div>
        <br />
        <Panel title Ueberschrift="Überschrift" contend label="Test1234567" />
        <br />
        <Panel title title Ueberschrift="Noch eine Überschrift" contend label="Test123456" />
        </div>     
      
    );
  }
}

export default App;
