import React from "react";
import styles from "./navItems.module.css";
import { NavLink } from "react-router-dom";

function NavItems() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  return (
    <ul className={styles.nav}>
      <li className={styles.li}>
        <NavLink
          to="/features"
          style={({ isActive }) => {
            return isActive ? { color: "#c95353" } : {};
          }}
        >
          Features
        </NavLink>
      </li>
      <li className={styles.li}>
        {isLoggedIn ? (
          <NavLink
            to="/my-tasks"
            style={({ isActive }) => {
              return isActive ? { color: "#c95353" } : {};
            }}
          >
            Maryam
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            style={({ isActive }) => {
              return isActive ? { color: "#c95353" } : {};
            }}
          >
            Log In
          </NavLink>
        )}
      </li>
    </ul>
  );
}

export default NavItems;
