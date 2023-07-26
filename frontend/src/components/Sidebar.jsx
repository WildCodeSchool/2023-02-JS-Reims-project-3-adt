import React from "react";
import "../styles/Navbar.css";
import "../styles/Dashboard.css";

function Sidebar() {
  return (
    <div className="btnSidebar">
      <button type="button">Ajouter</button>
      <button type="button">Modifier</button>
      <button type="button">Supprimer</button>
      <div>
        <button type="button" className="deconectionadmin">
          Déconnection
        </button>
      </div>
    </div>
  );
}
export default Sidebar;
