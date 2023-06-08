import { Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import HomeUser from "./pages/HomeUser";
import Scoring from "./components/Scoring";
import SurveyHotel from "./pages/SurveyHotel";
import SurveyRestaurant from "./pages/SurveyRestarurant";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomeUser />} />
        <Route path="/scoring" element={<Scoring />} />
        <Route path="/category/hebergement" element={<SurveyHotel />} />
        <Route path="/category/guide" element={<SurveyRestaurant />} />
      </Routes>
    </div>
  );
}

export default App;
