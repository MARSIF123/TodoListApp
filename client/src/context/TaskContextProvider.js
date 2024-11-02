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

  const toggleTaskCompletion = async (taskId, isCompleted) => {
    const token = window.localStorage.getItem("jwt");
    console.log("Update task Completion ", token);
    try {
      const res = await api.put(
        `/tasks/${taskId}`,
        {
          isCompleted: !isCompleted,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(res.data.task);
      const newTasks = tasks.map((task) => {
        if (task._id === taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
      setTasks(newTasks);
      setFilteredTasks(newTasks);
    } catch (err) {
      console.log(err.message);
    }
  };

  const toggleTaskImportance = async (taskId, isImportant) => {
    const token = window.localStorage.getItem("jwt");
    console.log("Update task Importance ", token);
    try {
      const res = await api.put(
        `/tasks/${taskId}`,
        {
          isImportant: !isImportant,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const newTasks = tasks.map((task) => {
        if (task._id === taskId) {
          return { ...task, isImportant: !task.isImportant };
        }
        return task;
      });
      setTasks(newTasks);
      setFilteredTasks(newTasks);
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteTask = async (id) => {
    const token = window.localStorage.getItem("jwt");
    console.log("Delete task  ", token);
    try {
      const res = await api.delete(`/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newTasks = tasks.filter((t) => {
        return t._id !== id;
      });
      setTasks(newTasks);
      setFilteredTasks(newTasks);
    } catch (err) {
      console.log(err.message);
    }
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
      console.log({ today });
      setFilteredTasks(
        tasks.filter((task) => {
          const date = new Date(task.dueDate);

          return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
          );
        })
      );
    }

    return;
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
