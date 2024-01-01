import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import style from '../styles/Navbar.module.css'

function Navbar() {
  
  const logoutFunc = () => {
    toast.success('Çıkış işlemi gerçekleştiriliyor..');
    setTimeout(() => {
      signOut(auth);
      navigate('/');
    }, 5500);
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
        <div className={style.logout} onClick={logoutFunc}>Çıkış</div>
      </div>
      <div className={style.copyright}>
          <p>Copyright by <strong>KARTAL GULES</strong></p>
      </div>
    </nav>
  )
}
export default Navbar;