/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import style from '../styles/Navbar.module.css'

function Navbar() {
  
  return (
    <nav>
      <div className={style.userDetail}>
        <h3>Örnek Sitesi</h3>
        <p>Sakin Sayısı : 2500 Kişi</p>
      </div>
      <div className={style.routes}>
        <NavLink exact="true" to="/">Anasayfa</NavLink>
        <NavLink to="/list">Sakin Listesi</NavLink>
        <NavLink to="/add">Sakin Ekle</NavLink>
        <NavLink to="/excelAdd">Excel Toplu Ekle</NavLink>
        <NavLink to="/bulkDelete">Excel Toplu Sil</NavLink>
        <NavLink to="/settings">Ayarlar</NavLink>
        <NavLink to="/logout">Çıkış</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
