/* eslint-disable no-unused-vars */
import React from "react";
import style from "../../styles/Login.module.css";
import { Form, Input, Button } from "antd";
import userData from '../../../data/users.json'

function Login() {
  let isLogin = false
  const onFinish = (values) => {
    localStorage.setItem("username", JSON.stringify(values.username))
    localStorage.setItem("password", JSON.stringify(values.password))
    values.username == userData[0].username && values.password == userData[0].password  ? isLogin = true : null;
  }
  return (
    <div className={style.login_container}>
      <h1>Giriş Yapın</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name={"username"}>
          <Input placeholder="Kullanıcı adınızı giriniz" required />
        </Form.Item>
        <Form.Item name={"password"}>
          <Input placeholder="Şifrenizi giriniz" required />
        </Form.Item>
        <Button htmlType="submit" type="primary">Giriş Yap</Button>
      </Form>

      {/* <label name="remember">
        Beni Haırla
        <input type="checkbox" name="remember" />
      </label>
      <a href="#">Şifremi unuttum?</a> */}
    </div>
  );
}

export default Login;
