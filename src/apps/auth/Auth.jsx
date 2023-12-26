import React, { useState } from "react";

export const Auth = () => {
  const [singUp, setSingUp] = useState(true);

  return (
    <>
      <div className="auth">
        <div className="auth-container">
          <h2>{singUp ? "REGISTER" : "LOGIN"}</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="auth-containerbutton">
            {singUp ? "Register" : "Login"}
          </div>
        </div>
      </div>
    </>
  );
};
