/* eslint-disable no-unused-vars */
import React from "react";
import style from '../../styles/Logout.module.css'
import { NavLink } from "react-router-dom";

function Logout() {
  const handleOut = () => {
    localStorage.clear();
    console.log("Çıkış yapıldı")
    // isLogin = false;
  }
  return (
    <div className={style.logout}>
      <h2>Çıkış yapmak istediğinize emin misiniz?</h2>
      <NavLink to={"/"} onClick={handleOut}>Evet</NavLink>
      <NavLink to={"/"}>Hayır</NavLink>
    </div>
  )
}

export default Logout;
