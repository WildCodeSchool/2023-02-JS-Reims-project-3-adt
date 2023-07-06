import React from "react";

export default function UnknownScore() {
  return (
    <div>
      <p>
        égal ou inférieur à 100% des "concerné" & "obligatoire" et/ou inférieur
        à 100% des questions "concerné" & "essentiel"
      </p>
      <p>Merci d'avoir fait votre auto-évaluation.</p>
      <p>
        il semble que vous n'ayez pas pu répondre à toutes les questions
        nécessaires au calcul du résultat
      </p>
      <p>LISTE DES QUESTIONS "NE SAIT PAS"</p>
      <p>
        Vous êtes encore en chemin. Ce serait dommage de vous arrêter là,
        dailleurs, peut-être même que les critères auxquels vous n'avez pu
        répondre sont déjà remplis.
      </p>
      <p>
        Sans le savoir, vous pourriez intégrer le réseau de partenaires
        écotourisme et bénéficier
      </p>
      <li>
        Des actions de mise en réseau avec les autres établissemnts membres
      </li>
      <li>De promotion et de communication</li>
      <li>De conseils pour pousuivre votre démarche et aller plus loin</li>
      <p>Et maintenant !?</p>
      <p>
        Nous vous invitons à partager ce résultat avec le conseiller écotourisme
        de l'Agence de Développement Touristique en nous laissant vos
        coordonnées pour être recontacté et travailler avec lui sur la
        transition de votre activité.
      </p>

      <button type="button" className="contacterLeConseiller">
        Contacter le conseiller
      </button>
    </div>
  );
}
