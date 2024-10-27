import React from "react";
import styles from "./taskItem.module.css";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { VscStarEmpty } from "react-icons/vsc";
import { VscStarFull, VscTrash } from "react-icons/vsc";
import { TiThSmall } from "react-icons/ti";
import { tasksCtx } from "../../../context/TaskContextProvider";
import Modal from "../Modal/Modal";

function TaskItem({
  children,
  isCompleted,
  isImportant,
  dueDate,
  id,
  groupId,
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [groupInput, SetGroupInput] = React.useState("");

  const {
    toggleTaskCompletion,
    toggleTaskImportance,
    groups,
    addToGroup,
    addGroup,
    deleteTask,
  } = React.useContext(tasksCtx);
  const day =
    dueDate.getDate() + "/" + dueDate.getMonth() + "/" + dueDate.getFullYear();

  const groupInputHandler = (event) => {
    event.preventDefault();
    addGroup(groupInput);
  };
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

      <Modal
        title="Add to group"
        isOpen={isOpen}
        handleDismiss={() => setIsOpen(!isOpen)}
      >
        <div>
          {groups.map((g) => {
            console.log("Group ID:", g.groupId); // Log the id value
            return (
              <button
                key={g.groupId}
                className={styles.button}
                style={{ marginLeft: 10 }}
                onClick={() => {
                  addToGroup(g.groupId, id);
                }}
              >
                #{g.title}
              </button>
            );
          })}
        </div>
        <form className={styles.form} onSubmit={groupInputHandler}>
          <input
            required
            type="text"
            className={styles.input}
            value={groupInput}
            onChange={(event) => {
              SetGroupInput(event.target.value);
            }}
            placeholder="Or Create New"
          />
          <button type="submit" className={styles.button}>
            Create
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default TaskItem;
