import React from "react";
import Contact from "./Contact";

export default function User({ user }) {
  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <Contact user={user} />
    </div>
  );
}