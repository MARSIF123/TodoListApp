import React from "react";
import styles from "../Login/login.module.css";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { userCtx } from "../../context/UserContextProvider";
import PageLayout from "../PageLayout";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function Register() {
  const navigate = useNavigate();

  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    registerUser,
  } = React.useContext(userCtx);

  const registerSubmissionHandler = async (event) => {
    event.preventDefault();
    if (!email?.includes("@") || password?.length <= 6) {
      setError("Either email or password is wrong!!!");
      return;
    }

    (await registerUser(email, password)) && navigate("/my-tasks");
    return;
  };
  React.useEffect(() => {
    setEmail("");
    setPassword("");
    setError("");
  }, []);
  return (
    <PageLayout>
      <form className={styles.form} onSubmit={registerSubmissionHandler}>
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

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button width={"100%"}>Register</Button>

          <Link to="/login" className={styles.link}>
            Already have an account? Login now.
          </Link>
        </div>
      </form>
    </PageLayout>
  );
}

export default Register;
