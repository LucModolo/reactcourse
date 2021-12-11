import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let numbers = [2,3,5];
let numbersNew = numbers.map(function(item) {
  return item * item;
})


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
