import React from "react";
import NavbarUser from "./NavbarUser";
import FooterUser from "./FooterUser";
import Contact from "./Contact";

export default function EligibleScore() {
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
          bénéficier gratuitement{" "}
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
          vos coordonnées pour être recontacté{" "}
        </p>
      </section>
      <Contact />
      <FooterUser />
    </div>
  );
}
