import React, { Component } from "react";
// import Greeting from "./greeting";
// import { Add, Multiply, Subtract, Divide } from "./calculator";
import Profile from "./card/contact";

class App extends Component {
  render() {
    return (
      <section>
        <Profile />
      </section>
    );
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

export default App;
