import React from "react";
import "./Legal.css";
import logo from "../assets/ecotourisme.jpeg";
import NavbarUser from "../components/NavbarUser";
import FooterUser from "../components/FooterUser";

function Legal() {
  return (
    <div>
      <NavbarUser />
      <div className="legal">
        <img src={logo} alt="logo-adt" className="logo-adt" />
        <h1>Mentions légales</h1>
        <p>
          L’Agence Départementale du Tourisme de la Marne (ADT), dont le siège
          est situé 13 bis rue Carnot - 51000 CHÄLONS-EN-CHAMPAGNE, agit en
          qualité de responsable du traitement de vos données personnelles
          (conformément au Règlement n°2016/679 dit RGPD).
        </p>
        <p>
          L’objet de ce traitement consiste à établir, via le questionnaire
          ci-après, un état des lieux des pratiques et engagements en matière
          d’écotourisme auprès des professionnels touristiques de la Marne.
        </p>
        <p>
          Cette collecte repose sur l’intérêt légitime du responsable de
          traitement. Les destinataires de vos données sont les services
          habilités de l’ADT ainsi que nos partenaires institutionnels.
        </p>
        <p>
          Les données personnelles collectées sont conservées pour la durée
          nécessaire à l’accompagnement du répondant. Vous disposez d’un droit
          d’accès, de rectification, de portabilité et d’effacement sur vos
          données ainsi qu’un droit de limitation et d’opposition du traitement.
        </p>
        <p>
          Vous avez la possibilité d’exercer vos droits sur simple demande par
          courrier électronique à l’adresse suivante
          p.labadie@tourisme-en-champagne.com. En cas de difficultés liées à la
          gestion de vos données, vous avez la possibilité de saisir la CNIL
          (www.cnil.fr).
        </p>
      </div>
      <button type="submit" className="buttonHome">
        Revenir / Accueil
      </button>
      <div className="footeruser">
        <FooterUser />
      </div>
    </div>
  );
}

export default Legal;
