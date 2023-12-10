/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isEqual } from "lodash";
import style from "../../styles/Login.module.css";
import { Form, Input, Button } from "antd";
import { singIn } from "../../firebase";

function Login() {
  const [loginCheck, setLoginCheck] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    singIn(mail, password)
      .then(() => {
        setLoginCheck(
          <p style={{ color: "green" }}>
            Giriş Başarılı <br />
            Yönlendiriliyorsunuz..
          </p>
        );
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch(
        setLoginCheck(
          <p style={{ color: "red" }}>Giriş Başarısız.Tekrar Deneyin</p>
        )
      );
  };

  return (
    <div className={style.login_container}>
      <div className={style.login_form}>
        <Form>
          <Form.Item>
            <Input
              style={{ width: "85%", height: "3rem", fontWeight: "700" }}
              placeholder="Kullanıcı adınızı giriniz"
              required
              value={mail}
              onChange={handleMail}
            />
          </Form.Item>
          <Form.Item>
            <Input
              style={{ width: "85%", height: "3rem", fontWeight: "700" }}
              placeholder="Şifrenizi giriniz"
              required
              value={password}
              onChange={handlePassword}
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
            onClick={handleSubmit}
          >
            Giriş Yap
          </Button>
        </Form>
        <div className={style.logCheck}>{loginCheck}</div>
        <NavLink to={"/"}>Anasayfaya Dön</NavLink>
      </div>
    </div>
  );
}

export default Login;
