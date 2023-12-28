import { NavLink } from "react-router-dom";
import style from "../../styles/LogoutHomeMain.module.css";

function Main() {
  return (
    <div className={style.home_main}>
      <div className={style.header}>
        <div className={style.logo}>
          <img src="../../../public/Logo.png" alt="logo" />
        </div>
        <div className={style.login}>
          <NavLink to="/register">Üye Ol veya Giriş Yap</NavLink>
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
          <NavLink to="/description">
            <i className="fa-solid fa-circle-down"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Main;
