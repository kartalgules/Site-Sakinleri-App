/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState({})
  console.log('login' ,login)
  console.log('user' ,user)

  const values = {
    login,
    setLogin,
    user,
    setUser
  };

  return (
    <LoginContext.Provider value={values}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;