import React, { useContext } from "react";
import NavbarUser from "./NavbarUser";
import FooterUser from "./FooterUser";
import Contact from "./Contact";
import { QuestionContext } from "../contexts/QuestionContext";
import "./Scoring.css";

function EligibleScore() {
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

  const pourcentage = (questionList) => {
    const divisor =
      questionList.length -
      questionList.filter((question) => question.response === "Non Concerné")
        .length;

    if (divisor === 0) {
      return 0;
    }
    return (
      (100 *
        questionList.filter((question) => question.response === "Atteint")
          .length) /
      divisor
    ).toFixed();
  };

  return (
    <div className="score">
      <NavbarUser />
      <section className="title-score">
        <h1>Merci d’avoir fait votre auto-évaluation.</h1>
        <p>Votre résultat : </p>
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
        <h2> 🎉🎉🎉 FÉLICITATIONS 🎉🎉🎉, </h2>
        <p>
          Vous avez engagé la transition vers un modèle d’activité plus
          responsable 🌱
        </p>
        <p>
          Vous pouvez intégrer le réseau de partenaires écotourisme et
          bénéficier gratuitement :
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
        <p>
          Nous vous invitons à partager ce résultat avec le conseiller
          écotourisme de l’Agence de Développement Touristique en nous laissant
          vos coordonnées pour être recontacté.
        </p>
        <Contact />
      </section>
      <FooterUser />
    </div>
  );
}

export default EligibleScore;
