import logo from "../assets/ecotourisme.jpeg";
import "./Footer.css";

function FooterUser() {
  return (
    <footer>
      <img src={logo} alt="logoEcotourisme" className="footer-img" />
      <p>© 2023 ADT Marne.Tous droits réserves.</p>
    </footer>
  );
}

export default FooterUser;
