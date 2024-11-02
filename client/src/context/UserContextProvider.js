import React from "react";
import api from "../api/axios-api";

export const userCtx = React.createContext();

function UserContextProvider({ children }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [error, setError] = React.useState("");

  const getUser = async (email, password) => {
    console.log("Login");
    try {
      const res = await api.post("/users/login", { email, password });
      window.localStorage.setItem("jwt", res?.data?.token);
      return true;
    } catch (err) {
      setError(err?.response?.data?.message);
      return false;
    }
  };

  const registerUser = async (email, password) => {
    try {
      const res = await api.post("/users/register", { email, password });
      console.log(res?.data?.token);
      window.localStorage.setItem({ key: "jwt", value: res?.data?.token });
      return true;
    } catch (err) {
      setError(err?.response?.data?.message);
      return false;
    }
  };

  const ctxVal = {
    email,
    setEmail,
    password,
    setPassword,
    isLoggedIn,
    setIsLoggedIn,
    error,
    setError,
    getUser,
    registerUser,
  };
  return <userCtx.Provider value={ctxVal}>{children}</userCtx.Provider>;
}

export default UserContextProvider;
