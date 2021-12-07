import React, { Component } from 'react';
import Button from "./Button";
import Panel from "./Panel.js"

import './App.css';

class App extends Component {
  constructor(props) {
    super (props);

        </div>
        <br />
        <Panel title Ueberschrift="Überschrift" contend label="Test1234567" />
        <br />
        <Panel title title Ueberschrift="Noch eine Überschrift" contend label="Test123456" />
        </div>     
      
    );
  }

render(){
  return (
    <div className="App">
      <h2>Hallo {this.state.name}!</h2>
      <p>{this.state.name.length}</p>
    </div>
  )
 }
}

export default App;
