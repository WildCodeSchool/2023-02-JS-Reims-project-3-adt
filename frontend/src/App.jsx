import { Route, Routes } from "react-router-dom";
import React from "react";
import { QuestionProvider } from "./contexts/QuestionContext";
import Register from "./pages/Register";
import RegisterUser from "./pages/RegisterUser";
import LoginForm from "./pages/LoginForm";
import LoginFormUser from "./pages/LoginFormUser";
import HomeUser from "./pages/HomeUser";
import Survey from "./pages/Survey";
import Legal from "./pages/Legal";
import EligibleScore from "./components/EligibleScore";
import UnknownScore from "./components/UnknownScore";
import NotEligibleScore from "./components/NotEligibleScore";

import "./App.css";

function App() {
  return (
    <QuestionProvider>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/loginuser" element={<LoginFormUser />} />
          <Route path="/" element={<HomeUser />} />
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
