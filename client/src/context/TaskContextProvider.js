import React from "react";

export const tasksCtx = React.createContext();
const INITIAL_STATE = [
  {
    id: crypto.randomUUID(),
    text: "Pay Electricity bill.",
    groupId: 1,
    isCompleted: false,
    isImportant: true,
    dueDate: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: "Email to university.",
    groupId: 2,
    isCompleted: true,
    isImportant: false,
    dueDate: new Date(),
  },
];

function TasksContextProvider({ children }) {
  const [tasks, setTasks] = React.useState(INITIAL_STATE);
  const [filteredTasks, setFilteredTasks] = React.useState(INITIAL_STATE);

  const [groups, setGroups] = React.useState([
    {
      groupId: crypto.randomUUID(),
      title: "Home Tasks",
    },
  ]);

  const addTask = (text, dueDate) => {
    console.log("adding task");
    const newTasks = [
      ...tasks,
      {
        id: crypto.randomUUID(),
        text,
        isCompleted: false,
        isImportant: false,
        dueDate,
      },
    ];
    setTasks(newTasks);
    setFilteredTasks(newTasks);
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
  const filterByGroup = (id) => {
    setFilteredTasks(
      tasks.filter((task) => {
        return task.groupId === id;
      })
    );
  };

  const addToGroup = (groupId, taskId) => {
    console.log("Adding to group ", groupId, taskId);
    const temp = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, groupId };
      }
      return task;
    });
    setTasks(temp);
    setFilteredTasks(temp);
  };
  const addGroup = (title) => {
    console.log("adding group");
    const newGroups = [
      ...groups,
      {
        groupId: crypto.randomUUID(),
        title,
      },
    ];
    console.log(newGroups);
    setGroups(newGroups);
  };

  const deleteGroup = (id) => {
    const newGroups = groups.filter((g) => {
      return g.groupId !== id;
    });
    setGroups(newGroups);
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
    groups,
    setGroups,
    addTask,
    toggleTaskCompletion,
    toggleTaskImportance,
    filterTasks,
    filterByGroup,
    addToGroup,
    addGroup,
    deleteGroup,
    deleteTask,
    searchTasks,
  };
  return <tasksCtx.Provider value={value}>{children}</tasksCtx.Provider>;
}

export default React.memo(TasksContextProvider);
