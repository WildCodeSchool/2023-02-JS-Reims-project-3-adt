import logo from "../assets/adt-logo.png";
import icon from "../assets/ecotourisme.jpeg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <navbar className="nav">
      <img className="logo" src={logo} alt="Logo ADT de la Marne" />
      <ul className="liste">
        <li className="items">Tableau de bord</li>
        <li className="items">Créer</li>
        <li className="items">Administateur</li>
        <li className="items">Déconnexion</li>
      </ul>
      <img className="icon" src={icon} alt="icon ADT de la Marne" />
    </navbar>
  );
}
