import "./App.css";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
