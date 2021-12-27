import React, { Component } from 'react';
import Panel from "./Panel";

class TodoList extends Component {

    render() {
      return (
        <Panel title="Todos">
          <ul className="App-todo">
            {this.props.todos.map(function(todo) {
              return (
                <li key={todo.id}>#{todo.id}: {todo.title}</li>
              )
            })}
          </ul>
        </Panel>
      )
    }
}

export default TodoList;