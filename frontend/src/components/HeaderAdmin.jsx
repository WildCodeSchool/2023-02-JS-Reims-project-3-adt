import Swal from "sweetalert2";
import logo from "../assets/ADT-Logo-Vert.jpeg";
import "../styles/Navbar.css";

function Headeradmin() {
  const AlertAdmin = async () => {
    const result = await Swal.fire({
      title: "Êtes-vous sûr de vouloir vous déconnecter ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f7438",
      cancelButtonColor: "blue",
      confirmButtonText: "Oui",
      cancelButtonText: "Annuler",
    });
    if (result.isConfirmed) {
      Swal.fire({
        text: "Vous êtes déconnecté",
        confirmButtonColor: "#3f7438",
      });
      window.location.href = "/login";
    }
  };

  return (
    <div className="Navadmin">
      <img src={logo} alt="logo adt marne" className="Logoadmin" />
      <button type="button" className="btnProfil" onClick={AlertAdmin}>
        Se deconnecter
      </button>
    </div>
  );
}
export default Headeradmin;
