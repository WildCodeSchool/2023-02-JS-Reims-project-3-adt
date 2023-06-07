/* eslint-disable no-alert */
import React, { useState } from "react";
import Essential from "./Essential";
import "./Survey.css";

function Obligatory() {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [obligatoryCompleted, setObligatoryCompleted] = useState(false);

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
      setObligatoryCompleted(true);
    } else {
      alert("Veuillez répondre à toutes les questions obligatoires");
    }
  };

  return (
    <div className="questionnaire">
      <h2>Les critères obligatoires </h2>

      <span>Suivi mensuel des consommations électriques:</span>
      <select value={question1} onChange={handleQuestion1Change}>
        <option value="" hidden>
          Sélectionnez une réponse
        </option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <span>
        Plus de la moitié des dispositifs d'éclairage sont de classe A:
      </span>
      <select value={question2} onChange={handleQuestion2Change}>
        <option value="" hidden>
          Sélectionnez une réponse
        </option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <span>
        L'hébergement n'a pas recours à des dispositifs de chauffage ou de
        climatisation extérieurs:
      </span>
      <select value={question3} onChange={handleQuestion3Change}>
        <option value="" hidden>
          Sélectionnez une réponse
        </option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <span htmlFor="question4">Chauffage à faible consommation:</span>
      <select
        name="question4"
        value={question4}
        onChange={handleQuestion4Change}
      >
        <option value="" hidden>
          Sélectionnez une réponse
        </option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      {obligatoryCompleted ? (
        <Essential />
      ) : (
        <button type="button" onClick={handleNextSection}>
          Next
        </button>
      )}
    </div>
  );
}

export default Obligatory;
