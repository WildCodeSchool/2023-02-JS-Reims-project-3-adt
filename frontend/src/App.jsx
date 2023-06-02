import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import Survey from "./components/Survey";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/form-ecotourism" element={<Survey />} />
      </Routes>
    </div>
  );
}

export default App;
