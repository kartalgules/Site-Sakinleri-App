import { createContext, useReducer, useEffect } from "react";

//  Create Auth Context
export const AuthContext = createContext();

//  The methods for states and actions in the auth reducer were created
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

//  Auth Context Provider Created
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  });
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ ...state,dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
