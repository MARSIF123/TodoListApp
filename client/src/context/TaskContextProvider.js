import React from "react";
import api from "../api/axios-api";

export const tasksCtx = React.createContext();

function TasksContextProvider({ children }) {
  //State Variables
  const [tasks, setTasks] = React.useState();
  const [filteredTasks, setFilteredTasks] = React.useState();

  const fetchTasks = async () => {
    const token = window.localStorage.getItem("jwt");
    console.log("Fetching tasks");
    console.log({ token });
    try {
      const res = await api.get("/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(res.data.tasks);
      console.log(res.data.tasks);
      setFilteredTasks(res.data.tasks);
    } catch (err) {
      console.log(err.message);
    }
  };

  const addTask = async (text, dueDate) => {
    const token = window.localStorage.getItem("jwt");
    console.log("adding task", token);
    try {
      const res = await api.post(
        "/tasks",
        {
          text,
          isCompleted: false,
          isImportant: false,
          dueDate,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const newTasks = [...tasks, res.data.task];
      setTasks(newTasks);
      setFilteredTasks(newTasks);
    } catch (err) {
      console.log(err.message);
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
    setFilteredTasks(newTasks);
  };

  const toggleTaskImportance = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isImportant: !task.isImportant };
      }
      return task;
    });
    setTasks(newTasks);
    setFilteredTasks(newTasks);
  };

  const filterTasks = (type) => {
    if (type === "all-tasks") {
      const temp = [...tasks];
      setFilteredTasks(temp);
    }
    if (type === "important") {
      setFilteredTasks(
        tasks.filter((task) => {
          return task.isImportant === true;
        })
      );
    }
    if (type === "completed") {
      setFilteredTasks(
        tasks.filter((task) => {
          return task.isCompleted === true;
        })
      );
    }
    if (type === "today") {
      const today = new Date();
      const todayFormatted =
        today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear();

      console.log({ today });
      setFilteredTasks(
        tasks.filter((task) => {
          const day =
            task.dueDate.getDate() +
            "-" +
            task.dueDate.getMonth() +
            "-" +
            task.dueDate.getFullYear();
          console.log({ day });
          return day === todayFormatted;
        })
      );
    }

    return;
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((t) => {
      return t.id !== id;
    });
    setTasks(newTasks);
    setFilteredTasks(newTasks);
  };

  const searchTasks = (searchTerm) => {
    const searchTermLowercase = searchTerm.toLowerCase();
    const temp = tasks.filter((item) => {
      return Object.values(item).some((value) => {
        return String(value).toLowerCase().includes(searchTermLowercase);
      });
    });
    setFilteredTasks(temp);
  };
  const value = {
    filteredTasks,
    setFilteredTasks,
    addTask,
    toggleTaskCompletion,
    toggleTaskImportance,
    filterTasks,
    deleteTask,
    searchTasks,
    fetchTasks,
  };
  return <tasksCtx.Provider value={value}>{children}</tasksCtx.Provider>;
}

export default React.memo(TasksContextProvider);
