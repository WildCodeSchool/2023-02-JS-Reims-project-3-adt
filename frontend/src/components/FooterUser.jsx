import { Link } from "react-router-dom";
import logo from "../assets/ecotourisme.jpeg";
import "./Footer.css";

function FooterUser() {
  return (
    <footer>
      <img src={logo} alt="logoEcotourisme" className="footer-img" />
      <ul className="footer-text">
        <li className="list-footer">© 2023 ADT Marne. Tous Droits Réservés.</li>
        <li className="list-footer">
          <Link to="/legal">Mentions légales</Link>
        </li>
        <li className="list-footer">
          <Link to="/login">Connexion Admin</Link>
        </li>
      </ul>
    </footer>
  );
}

export default FooterUser;
