import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import HomeUser from "./pages/HomeUser";
import Scoring from "./components/Scoring";
import Survey from "./pages/Survey";
import Legal from "./pages/Legal";
import UnknownScore from "./components/UnknownScore";
import NotEligibleScore from "./components/NotEligibleScore";
import EligibleScore from "./components/EligibleScore";
import { QuestionProvider } from "./contexts/QuestionContext";
import "./App.css";

function App() {
  return (
    <QuestionProvider>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomeUser />} />
          <Route path="/scoring" element={<Scoring />} />
          <Route path="/categories/:categoryId" element={<Survey />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/resultat/inconnu" element={<UnknownScore />} />
          <Route path="/resultat/non" element={<NotEligibleScore />} />
          <Route path="/resultat/oui" element={<EligibleScore />} />
        </Routes>
      </div>
    </QuestionProvider>
  );
}

export default App;
