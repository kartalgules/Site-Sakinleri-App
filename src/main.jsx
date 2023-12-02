/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import style from "./styles/Main.module.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoginProvider>
      <App />
    </LoginProvider>
  </BrowserRouter>
);
