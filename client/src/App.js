import "./App.css";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
    </Routes>
  );
}

export default App;
