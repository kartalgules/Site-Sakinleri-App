import React from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import style from '../styles/Navbar.module.css'
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from "../../hooks/useAuthContext";

function Navbar() {
  
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout()
  }
  
  return (
    <nav>
      <div className={style.userDetail}>
        <h3>User : {user.email}</h3>
        <p>Sakin Sayısı : 100 Kişi</p>
      </div>
      <div className={style.routes}>
        <NavLink to="/list">Sakin Listesi</NavLink>
        <NavLink to="/add">Sakin Ekle</NavLink>
        <NavLink to="/excelAdd">Excel Toplu Ekle</NavLink>
        <NavLink to="/bulkDelete">Excel Toplu Sil</NavLink>
        <NavLink to="/settings">Ayarlar</NavLink>
        <div className={style.logout} onClick={handleClick}>Çıkış</div>
      </div>
      <div className={style.copyright}>
          <p>Copyright by <strong>KARTAL GULES</strong></p>
      </div>
    </nav>
  )
}
export default Navbar;