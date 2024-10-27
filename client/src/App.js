import "./App.css";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import UserContextProvider from "./context/UserContextProvider";
import MyTasks from "./pages/MyTasks/MyTasks";
import TaskContextProvider from "./context/TaskContextProvider";

function App() {
  return (
    <UserContextProvider>
      <TaskContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-tasks" element={<MyTasks />} />
        </Routes>
      </TaskContextProvider>
    </UserContextProvider>
  );
}

export default App;
