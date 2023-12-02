/* eslint-disable no-unused-vars */
import { useContext } from "react";
import style from '../../styles/Logout.module.css'
import { NavLink } from "react-router-dom";
import LoginContext from "../../context/LoginContext";

function Logout() {
  const data = useContext(LoginContext);

  const handleOut = () => {
    setTimeout(()=>{
      data.setLogin(false)
    },1000)
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
