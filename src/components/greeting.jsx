import React, { Component } from "react";

const date = new Date();
const currentDate = date.getHours();

let greeting;

const textStyle = {
  color: "",
  borderLeft: "8px solid purple",
  paddingLeft: "8px",
};

if (currentDate < 12) {
  greeting = "Good Morning!";
  textStyle.color = "green";
} else if (currentDate < 18) {
  greeting = "Good Afternoon";
  textStyle.color = "skyblue";
} else {
  greeting = "Good Evening";
  textStyle.color = "purple";
}

class Greeting extends Component {
  render() {
    return (
      <div>
        <h1 style={textStyle}>{greeting} </h1>
        <h2>{new Date().toLocaleString()}</h2>
      </div>
    );
  }
}

export default Greeting;
