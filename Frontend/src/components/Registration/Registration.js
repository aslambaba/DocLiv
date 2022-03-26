import React from "react";
import "./Registration.css";

export default function Registration() {
  return (
    <div className="MainLoginBox">
      <center>
        <input placeholder="Name" />
        <select className="SelectField">
            <option>Male</option>
            <option>FeMale</option>
        </select>
        <input placeholder="Email" />
        <input placeholder="Phone Number" />
        <input placeholder="Password" />
        <button>Register</button>
      </center>
    </div>
  );
}
