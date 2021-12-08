import React, { Component } from 'react';
import Button from "./Button";
import Panel from "./Panel.js"

import './App.css';

class App extends Component {  

render(){
  return (
      <div className="App">
        <div className="App-header">
            <h2 callName="App-heading">"Welcome to React" </h2>
       
        </div> 
        <br /> 
          <Panel title="Überschrift" content="Test1234567" /> 
          <br/>

          <Panel title="Noch eine Überschrift" content="Der Content">
          <button Label= "Test" />
          </Panel>
      </div>  
        )
 }
}

export default App;
