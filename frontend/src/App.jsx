import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import "./App.css";
import HomeUser from "./pages/HomeUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/formulaire" element={<HomeUser />} />
      </Routes>
    </div>
  );
}

export default App;
