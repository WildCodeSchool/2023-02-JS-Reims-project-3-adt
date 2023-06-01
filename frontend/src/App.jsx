import React from "react";
import Survey from "./components/Survey";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Survey />
      <p>coucou</p>
    </div>
  );
}

export default App;
