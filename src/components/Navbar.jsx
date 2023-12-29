import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import style from '../styles/Navbar.module.css'

function Navbar() {
  
  const logoutFunc = async () => {
    toast.success('Çıkış işlemi gerçekleştiriliyor..');
    await signOut(auth);
    setTimeout(()=>{
      window.location = '/'
    },5000)
  }
  
  return (
    <nav>
      <div className={style.userDetail}>
        <h3>Örnek Sitesi</h3>
        <p>Sakin Sayısı : 100 Kişi</p>
      </div>
      <div className={style.routes}>
        <NavLink to="/list">Sakin Listesi</NavLink>
        <NavLink to="/add">Sakin Ekle</NavLink>
        <NavLink to="/excelAdd">Excel Toplu Ekle</NavLink>
        <NavLink to="/bulkDelete">Excel Toplu Sil</NavLink>
        <NavLink to="/settings">Ayarlar</NavLink>
        <NavLink to="/">Ayarlar</NavLink>
        <button onClick={logoutFunc}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar;