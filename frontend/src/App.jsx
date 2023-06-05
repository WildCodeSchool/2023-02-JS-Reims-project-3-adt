import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
