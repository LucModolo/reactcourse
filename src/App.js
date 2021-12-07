import React, { Component } from 'react';
import Button from "./Button";
import Panel from "./Panel.js"

import './App.css';

class App extends Component {
  constructor(props) {
    super (props);

        </div>
           <br />
          <Panel title="Ueberschrift" content="Test1234567" />
          <Panel title="Noch eine Überschrift" content="Test1234567" />
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
