import React from "react";
import styles from "./tasks.module.css";
import { tasksCtx } from "../../context/TaskContextProvider";
import TaskItem from "./TaskItem/TaskItem";

function Tasks() {
  const { filteredTasks } = React.useContext(tasksCtx);

  return (
    <>
      <div className={styles.scroll}>
        {filteredTasks?.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            groupId={task.groupId}
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
    </>
  );
}

export default Tasks;
