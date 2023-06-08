import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import "./App.css";
import Scoring from "./components/Scoring";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/formulaire" element={<Home />} />
        <Route path="/" element={<Register />} />
        <Route path="/scoring" element={<Scoring />} />
        <Route path="/formulaire" element={<Survey />} />
      </Routes>
    </div>
  );
}

export default App;
