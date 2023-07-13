import React from "react";
import NavbarUser from "./NavbarUser";
import FooterUser from "./FooterUser";
import Contact from "./Contact";
import "./Scoring.css";

export default function UnknownScore() {
  return (
    <div className="score">
      <NavbarUser />
      <section className="title-score">
        <h1>Merci d’avoir fait votre auto-évaluation.</h1>
        <p>
          Il semble que vous n’ayez pas pu répondre à toutes les questions
          nécessaires au calcul du résultat :
        </p>
        <p className="case-three">LISTE DES QUESTIONS À “NE SAIT PAS” </p>
        <p>
          Vous êtes encore en chemin. Ce serait dommage de vous arrêter là,
          d’ailleurs, peut-être même que les critères auxquels vous n’avez pu
          répondre sont déjà remplis. Sans le savoir, vous pourriez intégrer le
          réseau de partenaires écotourisme et bénéficier :
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
        <h3>Et maintenant ⁉️</h3>
        <p>
          Nous vous invitons à partager ce résultat avec le conseiller
          écotourisme de l’Agence de Développement Touristique en nous laissant
          vos coordonnées pour être recontacté et travailler avec lui sur la
          transition de votre activité.
        </p>
        <Contact />
      </section>
      <FooterUser />
    </div>
  );
}
