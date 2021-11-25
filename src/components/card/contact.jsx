import React from "react";
import Card from "./card";

function Profile() {
  return (
    <section className="card-section">
      <h1>My Contact List</h1>
      <Card
        bgColor="#12e69e"
        pic="Be"
        name="Beyonce"
        number="📞 +880 1863-365480"
        email="beyonce@info.com"
      />
      <Card
        bgColor="#5c6bc0"
        pic="Fe"
        name="Felone"
        number="📞 +880 1310-071378"
        email="felone@info.com"
      />
      <Card
        bgColor="#ec407a"
        pic="Mo "
        name="Monalisa"
        number="📞 +880 1310-071378"
        email="felone@info.com"
      />
      <Card
        bgColor="#64b5f6"
        pic=""
        name="Angela"
        number="📞 +880 1310-071378"
        email="felone@info.com"
      />
    </section>
  );
}

export default Profile;
