import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import "./App.css";
import Scoring from "./components/Scoring";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/scoring" element={<Scoring />} />
      </Routes>
    </div>
  );
}

export default App;
