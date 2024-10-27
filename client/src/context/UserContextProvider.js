import React from "react";

export const userCtx = React.createContext();

function UserContextProvider({ children }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState("");

  const ctxVal = {
    email,
    setEmail,
    password,
    setPassword,
    isLoggedIn,
    setIsLoggedIn,
  };
  return <userCtx.Provider value={ctxVal}>{children}</userCtx.Provider>;
}

export default UserContextProvider;
