import { Link } from "react-router-dom";
import logo from "../assets/ecotourisme.jpeg";
import "./Instruction.css";

function Instruction() {
  return (
    <div className="instruction">
      <img src={logo} alt="" className="logoInstruction" />
      <h2>Préambule</h2>
      <p>
        Cette charte concerne les acteurs du tourisme réceptif dans la Marne,
        elle a pour but de valoriser l’engagement vers un tourisme plus
        responsable. C’est aussi une charte de qualité puisqu’elle prend en
        compte les aménagements mis à la disposition des touristes.
      </p>
      <p>
        La clientèle étant de plus en plus exigeante par rapport au respect de
        l’environnement, l’enjeu de cette charte est de faire prendre conscience
        aux acteurs de la Marne que le tourisme vert est un tourisme d’avenir,
        et qu’il faut le construire dès aujourd’hui.
      </p>
      <p>
        La plupart des aménagements qui réduisent l’impact sur l’environnement
        permettent également de gérer sa consommation d’énergie et, sur le long
        terme, de réduire son coût de fonctionnement de façon durable.
      </p>
      <h2>Consignes d’auto-évaluation</h2>
      <p>
        Pour chaque critère étudié, il faudra déterminer s'il est applicable à
        votre activité ou non. S'il n'est pas applicable, cochez la case
        correspondante, il sera ainsi écarté du champ d'analyse.
      </p>
      <span>Cette charte comporte des critères de trois natures :</span>
      <ul className="listCriteria">
        <li>
          Les critères obligatoires qui sont éliminatoires s’ils ne sont pas
          validés. Ce sont des prérequis, ils ne rapportent donc pas de points
          pour valider la charte.
        </li>
        <li>
          Les critères essentiels concernent la plupart du temps des gestes
          simples et applicables au quotidien. Pour que l’activité soit
          considérée comme Eco-Tourisme, il faudra valider au moins 80% du total
          de ces critères arrondis à l’unité supérieure, complétés si besoin par
          les critères optionnels validés.
        </li>
        <li>
          Les critères optionnels concernent en partie des aménagements qui sont
          plus contraignants ou coûteux à mettre en place, ils ne peuvent donc
          pas être imposés mais sont tout de même valorisés s’ils sont validés.
          Ils sont à considérer comme des pistes d’amélioration dans une
          démarche de progrès continus.
        </li>
      </ul>
      <div className="userButton">
        <Link to="/categories/1" type="button" className="userBtn" Hebergement>
          Hebergement
        </Link>
        <Link
          to="/categories/Restaurant"
          type="button"
          className="userBtn"
          Hebergement
        >
          Restaurant
        </Link>
        <Link
          to="/categories/Guide"
          type="button"
          className="userBtn"
          Hebergement
        >
          Guide
        </Link>
      </div>
    </div>
  );
}

export default Instruction;
