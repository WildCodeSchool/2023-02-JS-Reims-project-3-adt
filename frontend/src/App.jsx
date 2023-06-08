import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import Survey from "./pages/Survey";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/formulaire" element={<Survey />} />
      </Routes>
    </div>
  );
}

export default App;
