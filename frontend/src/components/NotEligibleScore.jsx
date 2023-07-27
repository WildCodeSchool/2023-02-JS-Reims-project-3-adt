import React, { useContext } from "react";
import { QuestionContext } from "../contexts/QuestionContext";
import pourcentage from "../services/pourcentage";
import NavbarUser from "./NavbarUser";
import FooterUser from "./FooterUser";
import Contact from "./Contact";
import "./Scoring.css";

function NotEligibleScore() {
  const { questions } = useContext(QuestionContext);

  const mandatoryQuestions = questions.filter(
    (question) => question.mandatory_level === "Obligatoire"
  );
  const essentialQuestions = questions.filter(
    (question) => question.mandatory_level === "Essentiel"
  );
  const optionQuestions = questions.filter(
    (question) => question.mandatory_level === "Optionnel"
  );
  return (
    <div className="score">
      <NavbarUser />
      <section className="title-score">
        <h1>Merci d’avoir fait votre auto-évaluation.</h1>
        <p>Votre résultat est le suivant </p>
        <ul>
          <li>
            Pourcentage des questions répondues (Obligatoire) :{" "}
            <span className="score1">{pourcentage(mandatoryQuestions)}%</span>
          </li>
          <li>
            Pourcentage des questions répondues (Essentiel) :
            <span className="score2"> {pourcentage(essentialQuestions)}%</span>
          </li>
          <li>
            Pourcentage des questions répondues (Optionnel) :{" "}
            <span className="score3">{pourcentage(optionQuestions)}%</span>
          </li>
        </ul>
        <h3 className="case-two">
          Malheureusement vous n'êtes pas éligible au label éco-tourisme et
          maintenant ⁉️
        </h3>
        <p>
          Vous êtes encore en chemin. Saviez-vous que le plus difficile dans la
          transition est justement de vouloir l’enclencher ?
        </p>
        <p>
          Nous vous invitons à partager ce résultat avec le conseiller
          écotourisme de l’Agence de Développement Touristique en nous laissant
          vos coordonnées pour être recontacté et travailler avec lui sur la
          transition de votre activité.
        </p>
        <h3>Pourquoi poursuivre ⁉️</h3>
        <p>
          Pour bénéficier de conseils 100% gratuits et personnalisés en vue
          d’intégrer le réseau de partenaires écotourisme et bénéficier :
        </p>
        <ul>
          <li>
            des actions de mise en réseau avec les autres établissements membres{" "}
          </li>
          <li>de promotion et de communication</li>
          <li>
            de conseils pour poursuivre votre démarche et aller plus loin{" "}
          </li>
        </ul>
        <Contact />
      </section>
      <FooterUser />
    </div>
  );
}

export default NotEligibleScore;
