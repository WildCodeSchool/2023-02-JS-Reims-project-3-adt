import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import RegisterUser from "./pages/RegisterUser";
import LoginForm from "./pages/LoginForm";
import LoginFormUser from "./pages/LoginFormUser";
import HomeUser from "./pages/HomeUser";
// import Scoring from "./components/Scoring";
import Survey from "./pages/Survey";
import Legal from "./pages/Legal";
import UnknownScore from "./components/UnknownScore";
import NotEligibleScore from "./components/NotEligibleScore";
import EligibleScore from "./components/EligibleScore";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/registeruser" element={<RegisterUser />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/loginuser" element={<LoginFormUser />} />
        <Route path="/" element={<HomeUser />} />
        {/* <Route path="/scoring" element={<Scoring />} /> */}
        <Route path="/categories/:categoryId" element={<Survey />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/resultat/inconnu" element={<UnknownScore />} />
        <Route path="/resultat/non" element={<NotEligibleScore />} />
        <Route path="/resultat/oui" element={<EligibleScore />} />
      </Routes>
    </div>
  );
}

export default App;
