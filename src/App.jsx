/* eslint-disable no-unused-vars */
import React from "react";
import {LoginProvider} from "./context/LoginContext";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function App() {
  return (
    <LoginProvider>
      <Logout />
      <Login />
    </LoginProvider>
  );
}

export default App;
