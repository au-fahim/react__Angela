import React, { Component } from "react";
import Greeting from "./greeting";
import {add, multiply, subtract, divide} from "./calculator";


class App extends Component {
   

  render() {

  
    return (
      <ul>
        <li>{add(1, 2)}</li>
        <li>{multiply(2, 3)}</li>
        <li>{subtract(7, 2)}</li>
        <li>{divide(5, 2)}</li>
      </ul>
    )
  }
}




      /* <div className="Hello-app">
        <h1>👾 Hello React App! <br />{new Date().toLocaleString()}</h1>  
      </div> */



/**
 * There are two Different Ways to Create React Component
 * 1. Class Based Component/ Stateful Component/ Smart Component.
 * 2. Functional Component/ Stateless Component/ Dumb Component.
 */


export default App