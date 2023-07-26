import logo from "../assets/ADT-Logo-Vert.jpeg";
import "../styles/Navbar.css";

function Headeradmin() {
  return (
    <div className="Navadmin">
      <img src={logo} alt="logo adt marne" className="Logoadmin" />
      <button type="button" className="btnProfil">
        Profil
      </button>
    </div>
  );
}
export default Headeradmin;
