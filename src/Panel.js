import React, { Component } from 'react';
import "./Panel.css"
class Panel extends Component {
  render() {
    return (
      <div className="Panel">
        <h4 className= "Panel-Title" >{this.props.Ueberschrift}</h4>
        <panel>
        <p className= "Panel-Content">{this.props.label}</p>
        </panel>
      </div>
    );
  }
}

export default Panel;
