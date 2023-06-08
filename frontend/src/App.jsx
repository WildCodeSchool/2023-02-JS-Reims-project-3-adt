import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import "./App.css";
import HomeUser from "./pages/HomeUser";
import Scoring from "./components/Scoring";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/formulaire" element={<HomeUser />} />
        <Route path="/" element={<Register />} />
        <Route path="/scoring" element={<Scoring />} />
      </Routes>
    </div>
  );
}

export default App;
