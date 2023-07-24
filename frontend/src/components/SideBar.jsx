import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { IoMdCreate } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import "./SideBar.css";
import logo from "../assets/ecotourisme.jpeg";

function SideBar() {
  return (
    <div className="container1">
      {/* <nav className="navbar">
        <div className="logoAdmin">
          <img src={logo} alt="logo" className="logoAdt" />
        </div>
        <ul>
          <li>Home</li>
          <li>Blog</li>
        </ul>
      </nav> */}
      <div className="sidebar-content">
        <div className="sidebar-container">
          <div className="logoAdmin">
            <img src={logo} alt="logo" className="logoAdt" />
          </div>
          <Link to="/dashboard">
            <div className="nav-option option1">
              <AiOutlineDashboard color="white" />
              <h3>Dashboard</h3>
            </div>
          </Link>
          <div className="nav-option option1">
            <RiAdminFill />
            <h3>Admin</h3>
          </div>
          <div className="nav-option option1">
            <IoMdCreate />
            <h3>Créer</h3>
          </div>
          <div className="nav-option option1">
            <VscAccount />
            <h3>Profile</h3>
          </div>
          <div className="nav-option option1">
            <FiLogOut />
            <h3>Se deconnecter</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
