import Headeradmin from "../components/HeaderAdmin";
import FilterBar from "../components/FilterBar";
import Sidebar from "../components/Sidebar";
import FooterUser from "../components/FooterUser";
import User from "../components/User";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Headeradmin />
      <Sidebar />
      <FilterBar />
      <FooterUser />
      <User />
      <Navbar />
    </div>
  );
}

export default Dashboard;
