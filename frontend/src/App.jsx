import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import HomeUser from "./pages/HomeUser";
import Scoring from "./components/Scoring";
import Survey from "./pages/Survey";
import Question from "./pages/Question";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomeUser />} />
        <Route path="/scoring" element={<Scoring />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/survey/:familyId/" element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;
