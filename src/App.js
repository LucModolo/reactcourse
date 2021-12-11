
// Kurs 22 Excurs rendering

import React, { Component } from 'react';
import Button from "./Button";
import Panel from "./Panel.js"
import './App.css';

class App extends Component {  

  constructor(props){
    super(props);
  

  this.state = {
    todos: [
      "Obst einkaufen",
      "Programmieren lernen",
      "TODO"
    ]
   }
  this.addTodo = this.addTodo.bind(this);

    
  }
  
  addTodo(){
    let todos = this.state.todos;
    todos.push("4. Todo");
    this.setState({
      todos:todos
    })

  }

  render(){
        return (
        <div className="App">
          <h1>To Do Liste</h1>
            <ul className="App-todo">
              {this.state.todos.map(function(todo){
                return (
                  <li>{todo}</li>
                  )
                })}
            </ul>
            <button onClick={this.addTodo}>Todo hinzufügen</button>
          </div> 
          );
      }
    }    

export default App;
