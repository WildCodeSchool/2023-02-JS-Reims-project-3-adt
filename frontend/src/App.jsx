import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import HomeUser from "./pages/HomeUser";
import Scoring from "./components/Scoring";
import Survey from "./components/Survey";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomeUser />} />
        <Route path="/scoring" element={<Scoring />} />
        <Route path="/survey/:familyId" element={<Survey />} />
        <Route path="/survey/:familyId/:questionId" element={<Survey />} />
      </Routes>
    </div>
  );
}

export default App;
