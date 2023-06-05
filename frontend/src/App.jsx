import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import "./App.css";
import NavbarUser from "./components/NavbarUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <NavbarUser />
    </div>
  );
}

export default App;
