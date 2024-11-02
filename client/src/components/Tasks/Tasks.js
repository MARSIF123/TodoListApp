import React from "react";
import styles from "./tasks.module.css";
import { tasksCtx } from "../../context/TaskContextProvider";
import TaskItem from "./TaskItem/TaskItem";
import TaskInput from "./TaskInput/TaskInput";

function Tasks() {
  const { filteredTasks, fetchTasks } = React.useContext(tasksCtx);

  React.useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <div className={styles.scroll}>
        {filteredTasks?.map((task) => (
          <TaskItem
            key={task._id}
            id={task._id}
            isCompleted={task.isCompleted}
            isImportant={task.isImportant}
            dueDate={task.dueDate}
          >
            {task.text}
          </TaskItem>
        ))}
        {filteredTasks?.length <= 0 && (
          <p className={styles.notFound}>{`No Tasks Found '(`}</p>
        )}
      </div>
      <TaskInput />
    </>
  );
}

export default Tasks;
