import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);

  const { dispatch } = useAuthContext();
  const signUp = async () => {
    setLoading(true);
    setErr(false);
    const response = await fetch("/api/user/signup", {
      method: "POST",
      header: { "Content-Type": "aplicastionh/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
      setLoading(false);
      setErr(json.err);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", poyload: json });
      setLoading(false);
    }
  };
  return { signUp, loading, err };
};
