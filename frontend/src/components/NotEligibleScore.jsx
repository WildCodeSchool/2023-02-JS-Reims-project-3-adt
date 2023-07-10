import React from "react";

export default function NotEligibleScore() {
  return (
    <div>
      <p>Non atteint si</p>
      <p>Au moins un question obligatoire non atteinte</p>
      <p>ou</p>
      <p>Moins de 80% des questions essentielles non atteintes</p>
      <p>Merci d'avoir fait votre auto-évaluation.</p>
      <p>Votre résultat est le suivant</p>
      <p>X/X Questions Obligatoires</p>
      <p>X/X Questions Essentielles</p>
      <p>X/X Questions Optionnelles</p>
      <p>
        Vous êtes encore en chemin. Saviez-vous que le plus difficile dans la
        transition est justement de vouloir l'enclencher ?
      </p>
      <p>
        Ce serait dommage de vous arrêter là, d'ailleurs, peut-être même que
        sans le savoir vous auriez un meilleur score!
      </p>
      <p>Et maintenant !?</p>
      <p>
        Nous vous invitons à partager ce résultat avec le conseiller écotourisme
        de l'Agence de Développement Touristique en nous laissant vos
        coordonnées pour être recontacté et travailler avec lui sur la
        transition de votre activité.
      </p>
      <p>Pourquoi poursuivre !?</p>
      <p>
        Pour bénéficier de conseils 100% gratuits et personnalisés en vue
        d'intégrer le réseau de partenaires écotourisme et bénéficier :
      </p>
      <ul>
        <li>
          . des actions de mise en réseau avec les autres établissements membres
        </li>
        <li>. de promotion et de communication</li>
        <li>. de conseils pour poursuivre votre démarche et aller plus loin</li>
      </ul>
      <button type="button" className="contacterLeConseiller">
        Contacter le conseiller
      </button>
    </div>
  );
}
