import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useLogin = () => {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setLoading(true);
    setErr(null);

    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setLoading(false);
    }
  };
  return { login, loading, err };
};
