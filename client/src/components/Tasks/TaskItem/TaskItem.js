import React from "react";
import styles from "./taskItem.module.css";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { VscStarEmpty } from "react-icons/vsc";
import { VscStarFull, VscTrash } from "react-icons/vsc";
import { tasksCtx } from "../../../context/TaskContextProvider";

function TaskItem({ children, isCompleted, isImportant, dueDate, id }) {
  const { toggleTaskCompletion, toggleTaskImportance, deleteTask } =
    React.useContext(tasksCtx);
  const date = new Date(dueDate);
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  return (
    <div className={styles.card}>
      <button
        className={styles.btn}
        onClick={() => {
          toggleTaskCompletion(id, isCompleted);
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
      <p className={styles.date}>
        {date.toLocaleDateString("en-GB", options)}{" "}
      </p>
      <button
        onClick={() => {
          toggleTaskImportance(id, isImportant);
        }}
        className={styles.btn}
      >
        {isImportant ? <VscStarFull /> : <VscStarEmpty />}
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
