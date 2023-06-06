import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import "./App.css";
import NavbarUser from "./components/NavbarUser";
import FooterUser from "./components/FooterUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <NavbarUser />
      <FooterUser />
    </div>
  );
}

export default App;
