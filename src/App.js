import React, { Component } from 'react';
import Panel from "./Panel";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      <div className="App">
        <h1>Klickzähler: {this.props.value}</h1>
      <button onClick={this.props.onIncrement}>Klick</button>
      </div>
    );
  }
}

export default App;
