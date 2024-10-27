import React from "react";
import styles from "./taskInput.module.css";
import { FaArrowUp } from "react-icons/fa";
import { tasksCtx } from "../../../context/TaskContextProvider";
import TaskDatePicker from "../DatePicker/TaskDatePicker";

function TaskInput() {
  const [task, setTask] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(null);

  const { addTask } = React.useContext(tasksCtx);

  const taskSubmitHandler = (event) => {
    event.preventDefault();
    addTask(task, selectedDate);
  };
  return (
    <form className={styles.card} onSubmit={taskSubmitHandler}>
      <input
        required
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
        placeholder="Learn React Context Basics"
      />
      <TaskDatePicker
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <button type="submit">
        <FaArrowUp />
      </button>
    </form>
  );
}

export default TaskInput;
