/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { useLogin } from "../../context/LoginContext";
import style from "../../styles/Logout.module.css";

function Logout() {
  const data = useLogin();
  const handleOut = () => {
    setTimeout(() => {
      data.setLogin(false);
    }, 1000);
  };
  return (
    <div className={style.logout}>
      <h2>Çıkış yapmak istediğinize emin misiniz?</h2>
      <NavLink to={"/"} onClick={handleOut}>
        Evet
      </NavLink>
      <NavLink to={"/"}>Hayır</NavLink>
    </div>
  );
}

export default Logout;
