import { NavLink } from "react-router-dom";
import style from '../../styles/Logout_Home.module.css'

function Home() {
  return (
    <div className={style.Home_container}>
      <NavLink to={"/login"}>Giriş Yap</NavLink>

    </div>
  )
}

export default Home;
