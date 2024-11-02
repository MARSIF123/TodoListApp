import React from "react";
import styles from "./taskItem.module.css";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { VscStarEmpty } from "react-icons/vsc";
import { VscStarFull, VscTrash } from "react-icons/vsc";
import { TiThSmall } from "react-icons/ti";
import { tasksCtx } from "../../../context/TaskContextProvider";

function TaskItem({ children, isCompleted, isImportant, dueDate, id }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const { toggleTaskCompletion, toggleTaskImportance, deleteTask } =
    React.useContext(tasksCtx);
  const day = "new date";
  // dueDate.getDate() + "/" + dueDate.getMonth() + "/" + dueDate.getFullYear();

  return (
    <div className={styles.card}>
      <button
        className={styles.btn}
        onClick={() => {
          toggleTaskCompletion(id);
        }}
      >
        {isCompleted ? <RiCheckboxCircleFill /> : <RiCheckboxCircleLine />}
      </button>
      <p
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        className={styles.text}
      >
        {children}
      </p>
      <p className={styles.date}>{day} </p>
      <button
        onClick={() => {
          toggleTaskImportance(id);
        }}
        className={styles.btn}
      >
        {isImportant ? <VscStarFull /> : <VscStarEmpty />}
      </button>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={styles.btn}
      >
        <TiThSmall />
      </button>
      <button
        onClick={() => {
          deleteTask(id);
        }}
        className={styles.btn}
      >
        <VscTrash />
      </button>
    </div>
  );
}

export default TaskItem;
