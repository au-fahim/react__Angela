import React from "react";

function Avatar(props) {
  return (
    <div className="img" style={{ background: `${props.bgColor}` }}>
      <h2>{props.name.substring(0, 2)}</h2>
    </div>
  );
}

export default Avatar;
