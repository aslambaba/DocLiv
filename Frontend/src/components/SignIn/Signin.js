import React from "react";
import "./Signin.css";

export default function SignIn() {
  return (
    <div className="MainLoginBox">
      <center>
        <input placeholder="Phone Number" />
        <input placeholder="Password" />
        <button>Login</button>
      </center>
    </div>
  );
}
