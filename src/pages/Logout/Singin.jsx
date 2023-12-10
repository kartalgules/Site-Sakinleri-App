import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";

function Singin() {
  const singUp = async (name, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateCurrentUser(auth, { displayName: name });
  };
  const [fullName, setFullName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  // const singIn = (email, password) => {};

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
        console.log("Done!..");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <form>
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
        <label>İsminiz</label>
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
