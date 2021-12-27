import React, { Component } from 'react';
import Panel from "./Panel";

class TodoAdd extends Component {

    constructor(props) {
        super(props);

        this.onTodoAdd = this.onTodoAdd.bind(this);
        this.onTodoInputChange = this.onTodoInputChange.bind(this);

        this.state = {
            newTodo: "Test123"
        }
    }

    onTodoAdd() {
        this.props.onAdd(this.state.newTodo);
    }

    onTodoInputChange(event) {
        this.setState({
            newTodo: event.target.value
        })
    }

    render() {
        let buttonStyles = {
            backgroundColor: (this.state.newTodo.length < 3 ? "yellow" : "green")
        }

        
        return (
            <Panel title="Todo hinzufügen"
           
            >
                <input 
                    type="text" 
                    onChange={this.onTodoInputChange}
                    value={this.state.newTodo}
                    />
                {(this.state.newTodo != "" ? (
                    <button 
                    onClick={this.onTodoAdd} 
                        style={buttonStyles}>
                        Todo hinzufügen ({this.state.newTodo.length})
                    </button>
                ) : null)}
            </Panel>
        )
    }
}



export default TodoAdd;