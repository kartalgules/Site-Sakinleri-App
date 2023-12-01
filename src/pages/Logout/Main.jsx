/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import style from "../../styles/LogoutHomeMain.module.css";
import { NavLink } from "react-router-dom";

function Main() {
    const pageDown = () => {

    }
  return (
    <div className={style.home_main}>
      <div className={style.header}>
        <div className={style.logo}>
          <img src="../../../public/Logo.png" alt="logo" />
        </div>
        <div className={style.login}>
          <NavLink to="/login">Giriş Yap</NavLink>
        </div>
      </div>
      <div className={style.section}>
        <video className={style.background} autoPlay muted loop>
          <source src="../../../public/main background.mp4" type="video/mp4" />
        </video>
        <div className={style.description}>
          <p>
            Artık Excel'e veya deftere kayıt oluşturup göz gezdirerek aramanıza
            ve vakit kaybetmenize gerek yok.
            <br />
            Çünkü artık Site Sakinleri App ile istediginiz kaydı kısa bir süre
            içerisinde kaydedip dilediğiniz zaman hızlı bir şekilde istediğiniz
            kişinin bilgilerine ulaşabileceksiniz.
          </p>
        </div>
        <div className={style.scroll_button}>
            <NavLink to="/description" ><i class="fa-solid fa-circle-down" onClick={pageDown}></i></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Main;
