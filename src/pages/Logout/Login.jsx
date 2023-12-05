/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isEqual } from "lodash";
import { useLogin } from "../../context/LoginContext";
import style from "../../styles/Login.module.css";
import userData from "../../../data/users.json";
import { Form, Input, Button } from "antd";

function Login() {
  const data = useLogin();
  const navigate = useNavigate();
  const [loginCheck, setLoginCheck] = useState("");

  const onFinish = (values) => {
    let isLogin = "";
    const isEqualValues = isEqual(values, userData[0]);
    isEqualValues ? (isLogin = true) : null;

    const cheking = () => {
      setLoginCheck(
        isLogin ? (
          <p style={{ color: "green" }}>
            Giriş Başarılı <br />
            Yönlendiriliyorsunuz..
          </p>
        ) : (
          <p style={{ color: "red" }}>Giriş Başarısız.Tekrar Deneyin</p>
        )
      );
      isLogin &&
        setTimeout(() => {
          data.setUserDB(values);
          data.setLogin(true);
          navigate("/");
        }, 2000);
    };
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
