import { NavLink } from "react-router-dom";
import style from "../styles/BadRequest.module.css";
function BadRequest() {
  return (
    <div className={style.main}>
      <h1>404 Sayfa Bulunamadı</h1>
      <br />
      <NavLink to={"/"}>Anasayfa&apos;ya dön</NavLink>
    </div>
  );
}

export default BadRequest;
