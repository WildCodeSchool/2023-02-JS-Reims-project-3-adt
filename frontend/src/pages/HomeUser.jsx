import React from "react";
import NavbarUser from "../components/NavbarUser";
import FooterUser from "../components/FooterUser";
import ExpandedInstruction from "../components/ExpandedInstruction";
import firstCard from "../assets/background-marne.jpeg";
import "../App.css";

function HomeUser() {
  return (
    <div className="home">
      <NavbarUser />
      <div className="expanded-card">
        <ExpandedInstruction
          title="Preambule"
          imgUrl={firstCard}
          body="Cette charte concerne les acteurs du tourisme réceptif dans la Marne elle a pour but de valoriser l’engagement vers un tourisme responsable. C’est aussi une charte de qualité puisqu’elle prend en compte les aménagements mis à la disposition des touristes."
          bodyContent="La clientèle étant de plus en plus exigeante par rapport au respect de l’environnement, l’enjeu de cette charte est prendre conscience aux acteurs de la Marne que le tourisme vert est un tourisme d’avenir, et qu’il faut le construire dès aujourd’hui."
        />
      </div>
      <FooterUser />
    </div>
  );
}

export default HomeUser;
