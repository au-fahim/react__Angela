import React from "react";
import Card from "./card";
import contact from "./more-profile";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      bgColor={contact.bgColor}
      name={contact.name}
      number={contact.number}
      email={contact.email}
      link_01={contact.link_01}
      link_02={contact.link_02}
      link_03={contact.link_03}
    />
  );
}

function Profile() {
  return (
    <div className="card-section">
      <h1>My Contact List</h1>
      <div className="card-wrapper">{contact.map(createCard)}</div>
    </div>
  );
}

export default Profile;
