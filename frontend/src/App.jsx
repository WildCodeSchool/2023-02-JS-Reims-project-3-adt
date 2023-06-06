import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/formulaire" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
