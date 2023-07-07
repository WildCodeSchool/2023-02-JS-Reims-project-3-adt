import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import HomeUser from "./pages/HomeUser";
import Scoring from "./components/Scoring";
import Survey from "./pages/Survey";
import Legal from "./pages/Legal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomeUser />} />
        <Route path="/scoring" element={<Scoring />} />
        <Route path="/categories/:categoryId" element={<Survey />} />
        <Route path="/legal" element={<Legal />} />
        {/* <Route path="/resultat/inconue" element={<UnknownScore />} />
        <Route path="/resultat/non" element={<NotEligibleScore />} />
        <Route path="/resultat/oui" element={<EligibleScore />} /> */}
      </Routes>
    </div>
  );
}

export default App;
