import { Link } from "react-router-dom";
import logo from "../assets/ecotourisme.jpeg";
import "./Footer.css";

function FooterUser() {
  return (
    <footer>
      <img src={logo} alt="logoEcotourisme" className="footer-img" />
      <p>© 2023 ADT Marne. Tous droits réservés.</p>
      <div>
        <Link to="/legal">Mentions légales</Link>
      </div>
    </footer>
  );
}

export default FooterUser;
