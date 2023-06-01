import React, { useState } from "react";
import Optional from "./Optional";

function Essential() {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [showOptional, setShowOptional] = useState(false);

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

  const handleNextSection = () => {
    setShowOptional(true);
  };

  return (
    <div className="questionnaire">
      <h2>Section 2 - Essential</h2>

      {/* Questions essentielles */}
      <span>
        Appareils électroménagers performants selon les recommandations de
        l'ADEME (cf. infographie de l'ADEME) A minima 3 équipements suivants :
        Réfrigérateur, lave-linge, sèche-linge, lave-vaisselle, four.
        <a href="https://agirpourlatransition.ademe.fr/particuliers/conso/droit-conso/nouvelle-etiquette-energie">
          Lien vers l'ADEME
        </a>
      </span>
      <select value={question1} onChange={handleQuestion1Change}>
        <option value="">Sélectionnez une réponse</option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <span>
        Pour les constructions neuves ou rénovation totale : utilisation de
        matériaux de construction biosourcés :
      </span>
      <select value={question2} onChange={handleQuestion2Change}>
        <option value="">Sélectionnez une réponse</option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <span>
        Isolation thermique performante des murs et plafonds
        <a href="https://librairie.ademe.fr/cadic/2047/guide-pratique-isoler-sa-maison.pdf?modal=false">
          Lien vers le guide de l'ADEME
        </a>
      </span>
      <select value={question3} onChange={handleQuestion3Change}>
        <option value="">Sélectionnez une réponse</option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <span>
        Les parois vitrées exposées au soleil doivent pouvoir être occultées en
        été : volets battants, électriques, casquette végétale, etc :
      </span>
      <select value={question4} onChange={handleQuestion4Change}>
        <option value="">Sélectionnez une réponse</option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      <span>
        Pour ses besoins en chauffage ou eau chaude sanitaire, l'établissement -
        utilise des énergies renouvelables ou - est alimenté en électricité par
        un fournisseur labellisé Vert Volt
        <a href="https://agirpourlatransition.ademe.fr/particuliers/vertvolt#paragraph-584788">
          Lien vers Vert Volt
        </a>
      </span>
      <select value={question5} onChange={handleQuestion5Change}>
        <option value="">Sélectionnez une réponse</option>
        <option value="Non applicable">Non applicable</option>
        <option value="Critère atteint">Critère atteint</option>
      </select>

      {/* Bouton "Next" */}
      <button type="button" onClick={handleNextSection}>
        Next
      </button>

      {/* Affichage du composant Optional */}
      {showOptional && <Optional />}
    </div>
  );
}

export default Essential;
