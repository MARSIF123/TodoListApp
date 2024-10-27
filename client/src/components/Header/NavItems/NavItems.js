import React from "react";
import styles from "./navItems.module.css";
import { NavLink } from "react-router-dom";
import { userCtx } from "../../../context/UserContextProvider";

function NavItems() {
  const { email, isLoggedIn } = React.useContext(userCtx);
  console.log({ email, isLoggedIn });
  let username;
  if (email) {
    [username] = email.split("@");
  }

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
            {username}
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
