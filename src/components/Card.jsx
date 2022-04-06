import React from "react";
import Avatar from "./Avatar";
import CardInfo from "./CardInfo";

export default function Card(props) {
  const contact = props.contact;

  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{contact.name}</h2>
        <Avatar imgURL={contact.imgURL} />
      </div>
      <div className="bottom">
        <CardInfo infoText={contact.phone} />
        <CardInfo infoText={contact.email} />
      </div>
    </div>
  );
}
