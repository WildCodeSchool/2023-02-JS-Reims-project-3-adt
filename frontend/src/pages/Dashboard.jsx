import Headeradmin from "../components/HeaderAdmin";
import FilterBar from "../components/FilterBar";
// import Sidebar from "../components/Sidebar";
import FooterAdmin from "../components/FooterAdmin";
import User from "../components/User";
// import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Headeradmin />
      {/* <Sidebar /> */}
      <FilterBar />
      <User />
      <FooterAdmin />
      {/* <Navbar /> */}
    </div>
  );
}

export default Dashboard;
