import "./App.css";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import UserContextProvider from "./context/UserContextProvider";
import MyTasks from "./pages/MyTasks/MyTasks";
import TaskContextProvider from "./context/TaskContextProvider";
import { IconContext } from "react-icons";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/Register/Register";

function App() {
  return (
    <UserContextProvider>
      <TaskContextProvider>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-tasks" element={<MyTasks />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </IconContext.Provider>
      </TaskContextProvider>
    </UserContextProvider>
  );
}

export default App;
