import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { toast } from 'react-toastify';

export const Auth = () => {
    const [singUp, setSingUp] = useState(true);
    const [authData, setAuthData] = useState({email:'', password:''});
    const [users, setUsers] = useState(null);

    const onChange = (e) => {
        setAuthData({...authData, [e.target.name] : e.target.value});
    }
    const authFunc = async() => {
        if(singUp){
           try {
            const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password)
            const user = data.user;
            if(user){
                window.location = '/';
            }
           } catch (error) {
            toast.error(error.message)
           }
        }else{
            try {
                const data = await signInWithEmailAndPassword(auth, authData.email, authData.password)
                const user = data.user;
                if(user){
                    window.location = '/';
                }
               } catch (error) {
                toast.error(error.message)
               }
        }
    }
    useEffect(()=> {
        onAuthStateChanged(auth,(user) => {
            if(user){
                const uid = user.uid;
                setUsers(user)
            }else{

            }
        })
    },[])
  return (
    <>
      <div className="auth">
        <div className="auth-container">
          <h2>{singUp ? "REGISTER" : "LOGIN"}</h2>
          <input type="email" name="email" value={authData.email} onChange={onChange} placeholder="Email" />
          <input type="password" name="password" value={authData.password} onChange={onChange}  placeholder="Password" />
          <div className="auth-container-google">
            Google ile Giriş Yap
            <p onClick={()=> setSingUp(!singUp)}>{singUp ? "Daha önce kayıt oldunuz mu?" : "Kayıt olmak mı istiyorsunuz"}</p>
          </div>
          <div className="auth-container-button" onClick={authFunc}>
            {singUp ? "Register" : "Login"}
          </div>
        </div>
      </div>
    </>
  );
};
