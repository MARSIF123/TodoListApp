import "./App.css";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import UserContextProvider from "./context/UserContextProvider";
import MyTasks from "./pages/MyTasks/MyTasks";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-tasks" element={<MyTasks />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
