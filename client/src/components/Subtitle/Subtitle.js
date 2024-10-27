import React from "react";
import styles from "./subtitle.module.css";

function Subtitle({ children }) {
  return <p className={styles.subtitle}>{children}</p>;
}

export default Subtitle;
