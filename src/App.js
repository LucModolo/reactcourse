
// Kurs Positiob 17

import React, { Component } from 'react';
import Button from "./Button";
import Panel from "./Panel.js"
import './App.css';

class App extends Component {  
  constructor(props){
    super(props);

      this.state = {
      name:"Welt"
    }
    this.changeName = this.changeName.bind(this);
  }

 /*   setTimeout(()=> {
      this.setState({
        name: "Venus"
      })
    },3000);
  */
  
   changeName() {
    alert("cangeName!"); 
    this.setState({
       name:"Venus"
     })
    }
  

  render(){
        return (
        <div className="App">
          <h2>Hallo {this.state.name}!</h2>
          <p>{this.state.name.length}</p>
          <button onClick={this.changeName}>
            Verändere den Namen
          </button>
          </div> 
          );
      }
    }
  






/*
  render(){
  return (
      <div className="App">
        <div className="App-header">
            <h2 callName="App-heading">"Welcome to React" </h2>
       
        </div> 
        <br /> 
          <Panel title="Überschrift"> 
          <p> Ich bin ein Absatz!</p>
          </Panel>
          <br/>

          <Panel title="Noch eine Überschrift">
            <Button label="Klick mich!" />
          </Panel>
      </div> 
        );
    }
  }
*/


export default App;
