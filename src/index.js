import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import counter from './reducers/index';
import './index.css';

let store = createStore(counter);
console.log(store.getState());
store.dispatch({type: "INCREMENT"});
console.log(store.getState());


let render =() => {
  
ReactDOM.render(
  <App
     value={store.getState()}
     onIncrement={() => {store.dispatch({type: "INCREMENT"});}}
     />,
    
     document.getElementById('root')
 );
}


render();
store.subscribe(render);