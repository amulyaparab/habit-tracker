import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Habits } from "./Pages/Habits";
import { Archives } from "./Pages/Archives";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Navbar />
      <button onClick={() => navigate("/archives")}>Go to archives</button>
      <Routes>
        <Route path="/" element={<Habits />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="*" element={<h1>Page Not Found.</h1>} />
      </Routes>
    </div>
  );
}

export default App;
