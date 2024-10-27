import React from "react";
import styles from "./login.module.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { userCtx } from "../../context/UserContextProvider";
import PageLayout from "../PageLayout";

function Login() {
  const navigate = useNavigate();

  const { email, setEmail, password, setPassword, setIsLoggedIn } =
    React.useContext(userCtx);

  const LoginSubmissionHandler = (event) => {
    event.preventDefault();
    console.log({ email, password });
    setIsLoggedIn(true);
    navigate("/my-tasks");
  };
  return (
    <PageLayout>
      <form className={styles.form} onSubmit={LoginSubmissionHandler}>
        <div className={styles.data}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
            className={styles.input}
            id="email"
            type="email"
          />

          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
            className={styles.input}
            style={{ marginBottom: 20 }}
            id="password"
            type="password"
          />

          <Button width={"100%"}>Login</Button>
        </div>
      </form>
    </PageLayout>
  );
}

export default Login;
