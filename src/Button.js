import React, { Component } from 'react';
import "./Button.css"

class Button extends Component {
  render() {
      console.log(this);
    return (
      <div className="Button">
        <h1 className="Button-heading">Ich bin ein Button</h1>
        <button>
            <strong className="Button-Klick-Text">{this.props.label}</strong>

            </button>
      </div>
    );
  }
}

export default Button;
