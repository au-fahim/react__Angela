import React from "react";
import Avatar from "./avatar";
import UserName from "./user-name";
import Telephone from "./tel";
import Email from "./email";
import SocilLink from "./social-link";
import contact from "./more-profile";

function Card(props) {
  return (
    <div className="card">
      <span className="card-id">{props.id}</span>
      <div className="top">
        <Avatar bgColor={props.bgColor} name={props.name} />
        <UserName name={props.name} />
      </div>
      <div className="details">
        <Telephone number={props.number} />
        <Email email={props.email} />
        <SocilLink socialLink={props.link_01} />
        <SocilLink socialLink={props.link_02} />
        <SocilLink socialLink={props.link_03} />
      </div>
      <button>View More</button>
    </div>
  );
}

export default Card;
