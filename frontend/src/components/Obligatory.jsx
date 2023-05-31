/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";

function Obligatory() {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");

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

  const handleNextSection = () => {
    if (question1 && question2 && question3 && question4) {
      console.log("go next");
    }
    return alert("Veuillez répondre à toutes les questions obligatoires");
  };

  return (
    <div className="questionnaire">
      <h2>Section 1 - Obligatory</h2>

      <label>Suivi mensuel des consommations électriques:</label>
      <select value={question1} onChange={handleQuestion1Change}>
        <option value="">Sélectionnez une réponse</option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <label>
        Plus de la moitié des dispositifs d'éclairage sont de classe A:
      </label>
      <select value={question2} onChange={handleQuestion2Change}>
        <option value="">Sélectionnez une réponse</option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <label>
        L'hébergement n'a pas recours à des dispositifs de chauffage ou de
        climatisation extérieurs:
      </label>
      <select value={question3} onChange={handleQuestion3Change}>
        <option value="">Sélectionnez une réponse</option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <label>Chauffage à faible consommation:</label>
      <select value={question4} onChange={handleQuestion4Change}>
        <option value="">Sélectionnez une réponse</option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <button onClick={handleNextSection}>Next</button>
    </div>
  );
}

export default Obligatory;
