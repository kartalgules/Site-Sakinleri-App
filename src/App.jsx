/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import style from "./styles/App.module.css";
// import Login from "./pages/Login";

import Login from "./pages/Logout/Login";
import Logout from "./pages/Login/Logout";

function App() {
  const isLogin = () => {
    if (localStorage === 1) {
      console.log("Giriş Yapıldı");
    } else {
      console.log("Hatalı giriş");
    }
  };
  return (
    <>
      {isLogin ? (
        <div className={style.container}>
          <Navbar />
          <div className={style.article}>
          <Login />
            {/* <Login /> */}
          </div>
        </div>
      ) : (
        <Logout />
      )}
    </>
  );
}

export default App;
