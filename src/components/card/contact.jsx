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
      <div className="card-wrapper">
        {/* create card element using .map() function */}

        {contact.map(createCard)}

        {/* <Card
            bgColor="#12e69e"
            name="Beyonce"
            number="+880 1863-365480"
            email="beyonce@info.com"
            link_01="www.facebook.com"
          />
          <Card
            bgColor="#5c6bc0"
            name="Felone"
            number="+880 1310-071378"
            email="felone@info.com"
            link_01="www.facebook.com"
            link_02="www.twitter.com"
          />
          <Card
            bgColor="#64b5f6"
            name="Angela"
            number="+880 1310-071378"
            email="felone@info.com"
            link_01="www.facebook.com"
            link_02="www.twitter.com"
            link_03="www.yahoo.com"
          />
          <Card
            bgColor="#ec407a"
            name="Monalisa"
            number="+880 1310-071378"
            email="felone@info.com"
            link_01="www.facebook.com"
            link_02="www.twitter.com"
          />
          <Card
            bgColor="#12e69e"
            name="Beyonce"
            number="+880 1863-365480"
            email="beyonce@info.com"
            link_01="www.facebook.com"
          />  */}
      </div>
    </div>
  );
}

export default Profile;
