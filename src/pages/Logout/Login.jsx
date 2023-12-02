/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import style from "../../styles/Login.module.css";
import { Form, Input, Button } from "antd";
import userData from "../../../data/users.json";

function Login() {

  let isLogin = false;
  const [loginCheck, setLoginCheck] = useState("");
  const cheking = () => {
    setLoginCheck(
      isLogin ? <p style={{color : "green"}}>Giriş Başarılı</p> : <p style={{color:"red"}}>Giriş Başarısız.Tekrar Deneyin</p>
      );
  };

  const onFinish = (values) => {
    localStorage.setItem("username", JSON.stringify(values.username));
    localStorage.setItem("password", JSON.stringify(values.password));
    values.username === userData[0].username &&
    values.password == userData[0].password
      ? (isLogin = true)
      : null;
    cheking();
  };
  
  return (
    <div className={style.login_container}>
      <div className={style.login_form}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name={"username"}>
            <Input
              style={{ width: "85%", height: "3rem", fontWeight: "700" }}
              placeholder="Kullanıcı adınızı giriniz"
              required
            />
          </Form.Item>
          <Form.Item name={"password"}>
            <Input
              style={{ width: "85%", height: "3rem", fontWeight: "700" }}
              placeholder="Şifrenizi giriniz"
              required
            />
          </Form.Item>
          <Button
            style={{
              width: "40%",
              height: "20%",
              fontWeight: "600",
              background: "#8c8c8c",
            }}
            htmlType="submit"
            type="primary"
          >
            Giriş Yap
          </Button>
          {loginCheck}
        </Form>
      </div>
    </div>
  );
}

export default Login;
