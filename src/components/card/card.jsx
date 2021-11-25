import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="img" style={{ background: `${props.bgColor}` }}>
        <h2>{props.name.substring(0, 2)}</h2>
      </div>
      <div className="details">
        <h2>{props.name}</h2>
        <p>{props.number}</p>
        <a href="#">{props.email}</a>
      </div>
    </div>
  );
}

export default Card;
