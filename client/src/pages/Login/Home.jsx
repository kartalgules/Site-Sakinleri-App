import React from "react";
import style from "../../styles/Home.module.css";

const Home = () => {
  return (
    <div className={style.main_container}>
      Hoşgeldiniz <span>{auth._currentUser.email}</span>
    </div>
  );
}

export default Home;
