
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
      {id: 1, title: "Obst einkaufen"},
      {id: 2, title: "Programmieren lernen"},
      {id: 3, title: "TODO"}
    ]
   }
  this.addTodo = this.addTodo.bind(this);
  }
  
  addTodo(){
    let todos = this.state.todos;
    let maxID = 0;
    for(let todo of todos){
      if (todo.id > maxID) {
        maxID = todo.id;
      }
    }

    todos.unshift({id: (maxID + 1), title: "4. Todo"});
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
                  <li key={todo.id}>#{todo.id}: {todo.title}</li>
                  )
                })}
            </ul>
            <button onClick={this.addTodo}>Todo hinzufügen</button>
          </div> 
          );
      }
    }    

export default App;
