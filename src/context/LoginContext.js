/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import userData from '../../data/userData.json'

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

  const [login, setLogin] = useState(() => {
    const local = localStorage.getItem("user")
    local === userData[0] ? true : false
  })

  const [userDB, setUserDB] = useState({})

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userDB))
    userDB === userData[0] && setLogin(true)
  },[userDB])

  const values = {
    login,
    setLogin,
    userDB,
    setUserDB
  };

  return (
    <LoginContext.Provider value={values}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext) ;