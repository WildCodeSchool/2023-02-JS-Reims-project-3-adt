import React, { useState } from "react";
import "./Survey.css";

function Optional() {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");

  const handleQuestion1Change = (event) => {
    setQuestion1(event.target.value);
  };

  const handleQuestion2Change = (event) => {
    setQuestion2(event.target.value);
  };

  const handleQuestion3Change = (event) => {
    setQuestion3(event.target.value);
  };

  const handleQuestion4Change = (event) => {
    setQuestion4(event.target.value);
  };

  const handleQuestion5Change = (event) => {
    setQuestion5(event.target.value);
  };

  return (
    <>
      <h2>Les critères optionnels</h2>
      <span>Conception du bâtiment avec un niveau de performance élevé:</span>
      <select value={question1} onChange={handleQuestion1Change}>
        <option value="" hidden>
          Sélectionnez une réponse
        </option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <span>Matériaux d'isolation biosourcés:</span>
      <select value={question2} onChange={handleQuestion2Change}>
        <option value="" hidden>
          Sélectionnez une réponse
        </option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <span>Autre question 3:</span>
      <select value={question3} onChange={handleQuestion3Change}>
        <option value="" hidden>
          Sélectionnez une réponse
        </option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <span>Autre question 4:</span>
      <select value={question4} onChange={handleQuestion4Change}>
        <option value="" hidden>
          Sélectionnez une réponse
        </option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <span>Autre question 5:</span>
      <select value={question5} onChange={handleQuestion5Change}>
        <option value="" hidden>
          Sélectionnez une réponse
        </option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>
    </>
  );
}

export default Optional;
