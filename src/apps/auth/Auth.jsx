import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import style from '../../styles/Auth.module.css'

const Auth = () => {
  const [singUp, setSingUp] = useState(true);
  const [authData, setAuthData] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  const authFunc = async () => {
    if (singUp) {
      try {
        const data = await createUserWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const user = data.user;
        if (user) {
          window.location = "/";
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      try {
        const data = await signInWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const user = data.user;
        if (user) {
          window.location = "/";
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <>
      <div className={style.auth}>
        <div className={style.authContainer}>
          <h1>{singUp ? "REGISTER" : "LOGIN"}</h1>
          <input
            type="email"
            className={style.input}
            name="email"
            value={authData.email}
            onChange={onChange}
            placeholder="Email"
          />
          <input
            type="password"
            className={style.input}
            name="password"
            value={authData.password}
            onChange={onChange}
            placeholder="Password"
          />
          <div className={style.authChoise}>
            
            <p onClick={() => setSingUp(!singUp)}>
              {singUp
                ? "Have you registered before ?"
                : "Do you want to register ?"}
            </p>
          </div>
          <div className={style.authContainerButton} onClick={authFunc}>
            {singUp ? "Register" : "Login"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
