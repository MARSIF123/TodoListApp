import React from "react";
import styles from "./button.module.css";

function Button({ width, onClick, children }) {
  return (
    <button style={{ width }} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
