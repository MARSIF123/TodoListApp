import React from "react";
import styles from "./errorMessage.module.css";

const ErrorMessage = ({ children }) => {
  return <span className={styles.span}>{children}</span>;
};

export default ErrorMessage;
