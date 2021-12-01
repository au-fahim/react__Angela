import React, { Component } from "react";
import EmojiPedia from "./emoji/emoji_pedia";

class App extends Component {
  render() {
    return (
      <main className="main">
        <EmojiPedia />
      </main>
    );
  }
}

/**
 * There are two Different Ways to Create React Component
 * 1. Class Based Component/ Stateful Component/ Smart Component.
 * 2. Functional Component/ Stateless Component/ Dumb Component.
 */

export default App;
