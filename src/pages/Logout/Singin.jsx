/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { singUp } from "../../firebase";
import style from '../../styles/SingIn.module.css'

function Singin() {
  
  const [fullName, setFullName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    singUp(fullName, mail, password)
      .then(() => {
        navigate("/login");
        console.log("Done!..")
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className={style.form_container}>
      <form >
        <label>İsminiz</label>
        <input
          type="text"
          placeholder="İsminizi giriniz.."
          value={fullName}
          onChange={handleFullName}
        />
        <label>Mail Adresiniz</label>
        <input
          type="email"
          placeholder="Mail adresinizi giriniz.."
          value={mail}
          onChange={handleMail}
        />
        <label>Parolanız</label>
        <input
          type="password"
          placeholder="Parolanızı giriniz.."
          value={password}
          onChange={handlePassword}
        />
        <button onClick={handleSubmit}>Kayıt ol</button>
      </form>
    </div>
  );
}

export default Singin;
