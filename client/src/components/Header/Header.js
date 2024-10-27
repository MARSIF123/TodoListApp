import React from "react";
import logo from "../../assets/Logo.png";
import styles from "./header.module.css";
import NavItems from "./NavItems/NavItems";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <Link to={"/"} className={styles.logo}>
        <img src={logo} alt="Logo Task Tactician" />
      </Link>
      <NavItems />
    </div>
  );
}

export default Header;
