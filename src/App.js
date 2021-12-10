
// Kurs Positiob 17 und Lösung Musterlösung Counter

import React, { Component } from 'react';
import Button from "./Button";
import Panel from "./Panel.js"
import './App.css';

class App extends Component {  

  constructor(props){
    super(props);
  
    this.state = {
      counter: 0
      }
      this.incrementCounter = this.incrementCounter.bind(this);
    }

   incrementCounter() {
      this.setState({
      counter: this.state.counter + 1
    })
  }

  render(){
        return (
        <div className="App">
          <h2>Der aktuelle counter ist: {this.state.counter}</h2>
          <button onClick={this.incrementCounter}>Erhöhe den Zähler</button>
          </div> 
          );
      }
    }

export default App;
