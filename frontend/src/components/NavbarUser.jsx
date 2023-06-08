import logo from "../assets/ADT-Logo-Vert.jpeg";
import "../styles/Navbar.css";

function NavbarUser() {
  return (
    <div className="containerNavbarUser">
      <div className="logoUser">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default NavbarUser;
