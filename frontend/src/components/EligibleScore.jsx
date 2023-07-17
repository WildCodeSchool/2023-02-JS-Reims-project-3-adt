import React, { useContext } from "react";
import { QuestionContext } from "../contexts/QuestionContext";
import NavbarUser from "./NavbarUser";
import FooterUser from "./FooterUser";
import Contact from "./Contact";
import "./Scoring.css";

export default function EligibleScore() {
  const { questions } = useContext(QuestionContext);

  const mandatoryQuestions = questions.filter(
    (question) => question.mandatory_level === "Obligatoire"
  );
  const essentialQuestions = questions.filter(
    (question) => question.mandatory_level === "Essentiel"
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
        <p>Votre résultat est le suivant : </p>
        <ul>
          <li>X/X QUESTIONS OBLIGATOIRES</li>
          <li>X/X QUESTIONS ESSENTIELLES</li>
          <li>X/X QUESTIONS OPTIONNELLES </li>
        </ul>
        <h2>Félicitations 🎉, </h2>
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
    <div>
      <p>atteint si</p>
      <p>toutes les questions obligatoires "atteintes"</p>
      <p>et</p>
      <p>Plus de 80% des questions essentielles "atteintes"</p>
      <p>Merci d'avoir fait votre auto-évaluation.</p>
      <p>Votre résultat est le suivant</p>
      <p>
        Pourcentage des questions répondues (Obligatoire) :{" "}
        {pourcentage(mandatoryQuestions)}%
      </p>
      <p>
        Pourcentage des questions répondues (Essentiel) :{" "}
        {pourcentage(essentialQuestions)}%
      </p>
      <p>Félicitations</p>
      <p>
        Vous avez engagé la transition vers un modèle d'activité plus
        responsable
      </p>
      <p>
        Vous pouvez intégrer le réseau de partenaires écotourisme et bénéficier
        gratuitement
      </p>
      <ul>
        <li>
          . des actions de mise en réseau avec les autres établissements membres
        </li>
        <li>. de promotion de communication</li>
      </ul>
    </div>
  );
}
