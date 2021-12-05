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
          <Panel title="Ueberschrift"> 
            <p> Ich bin ein Absatz</p>
          </Panel>
          <br />
          
          <Panel title="Noch eine Überschrift">
            <Button label="Klick mich!" />
          </Panel>
        </div>     
    );
  }
}

export default App;
