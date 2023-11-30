/* eslint-disable no-unused-vars */
import React from "react";
import style from "../styles/Login.module.css";

function Login() {
  return (
    <div className={style.login_container}>
      <h1>Giriş Yapın</h1>
      <form className={style.login} htmlFor="">
        <input type="text" placeholder={"Kullanıcı adınızı giriniz"} required />
        <input type="password" placeholder={"Şifrenizi giriniz"} required />
        <button>Login</button>
        <label name="remember">
          Beni Haırla
          <input type="checkbox" name="remember" />
        </label>
        <a href="#">Şifremi unuttum?</a>
      </form>
    </div>
  );
}

export default Login;
