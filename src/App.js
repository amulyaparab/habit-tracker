import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Habits } from "./Pages/Habits";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Habits />} />
      </Routes>
    </div>
  );
}

export default App;
