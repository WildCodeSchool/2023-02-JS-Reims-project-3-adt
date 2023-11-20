import "../App.css";
import React from "react";
import NavbarUser from "../components/NavbarUser";
import FooterUser from "../components/FooterUser";
import Instruction from "../components/Instruction";

function HomeUser() {
  return (
    <div className="home">
      <NavbarUser />
      <Instruction />
      <FooterUser />
    </div>
  );
}

export default HomeUser;
