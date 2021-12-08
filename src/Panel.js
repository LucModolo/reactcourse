import React, { Component } from 'react';
import "./Panel.css"
class Panel extends Component {
  render() {
    
    console.log(this);
    return (
      <div className="Panel">
        <h4 className= "Panel-title" >{this.props.title}</h4>
        <p className= "Panel-content">{this.props.children}</p>
      </div>
    );
  }
}

export default Panel;
