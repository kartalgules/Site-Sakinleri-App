import React from "react";
import style from "../../styles/Home.module.css";
import { auth } from "../../firebase";

function Home() {
  console.log(auth)
  return (
    <div className={style.main_container}>
      Hoşgeldiniz <span>{auth._currentUser.email}</span>
    </div>
  );
}

export default Home;
