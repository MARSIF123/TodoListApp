import React from "react";
import styles from "./sidebar.module.css";
import logo from "../../assets/Logo.png";
import {
  FaSearch,
  FaStar,
  FaCalendar,
  FaPlus,
  FaCheckSquare,
  FaBars,
} from "react-icons/fa";
import { tasksCtx } from "../../context/TaskContextProvider";

function Sidebar() {
  const { filterTasks, searchTasks } = React.useContext(tasksCtx);
  const [searchTerm, setSeacrhTerm] = React.useState("");
  const [type, setType] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    filterTasks(type);
  }, [type]);

  const searchHandler = (event) => {
    event.preventDefault();
    searchTasks(searchTerm);
  };
  return (
    <div className={styles.card}>
      <button
        className={styles.button}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FaBars />
      </button>
      {isOpen && (
        <div className={styles.sidebar}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
          <form className={styles.search} onSubmit={searchHandler}>
            <input
              required
              placeholder="Search"
              className={styles["search-input"]}
              value={searchTerm}
              onChange={(event) => {
                setSeacrhTerm(event.target.value);
              }}
            />
            <button className={styles.button} type="submit">
              <FaSearch />
            </button>
          </form>
          <div className={styles.actions}>
            <button
              className={styles.button}
              onClick={() => {
                setType("all-tasks");
              }}
            >
              <FaPlus /> All Task
            </button>
            <button
              className={styles.button}
              onClick={() => {
                setType("important");
              }}
            >
              <FaStar /> Important
            </button>
            <button
              className={styles.button}
              onClick={() => {
                setType("today");
              }}
            >
              <FaCalendar /> Today
            </button>
            <button
              className={styles.button}
              onClick={() => {
                setType("completed");
              }}
            >
              <FaCheckSquare /> Completed
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
