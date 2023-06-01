/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

function Optional() {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");

  const handleQuestion1Change = (event) => {
    setQuestion1(event.target.value);
  };

  const handleQuestion2Change = (event) => {
    setQuestion2(event.target.value);
  };

  return (
    <div>
      <h2>Section 3 - Les Critères optionnels</h2>
      <span>Conception du bâtiment avec un niveau de performance élevé:</span>
      <select value={question1} onChange={handleQuestion1Change}>
        <option value="">Sélectionnez une réponse</option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>
      <span>Matériaux d'isolation biosourcés:</span>
      <select value={question2} onChange={handleQuestion2Change}>
        <option value="">Sélectionnez une réponse</option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>
      <span>Matériaux d'isolation biosourcés:</span>
      <select value={question2} onChange={handleQuestion2Change}>
        <option value="">Sélectionnez une réponse</option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>{" "}
      <span>Matériaux d'isolation biosourcés:</span>
      <select value={question2} onChange={handleQuestion2Change}>
        <option value="">Sélectionnez une réponse</option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>{" "}
      <span>Matériaux d'isolation biosourcés:</span>
      <select value={question2} onChange={handleQuestion2Change}>
        <option value="">Sélectionnez une réponse</option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>
    </div>
  );
}

export default Optional;
