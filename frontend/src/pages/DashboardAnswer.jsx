import Headeradmin from "../components/HeaderAdmin";
import FilterBar from "../components/FilterBar";
// import Sidebar from "../components/Sidebar";
import FooterAdmin from "../components/FooterUser";
import Answer from "../components/Answer";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Headeradmin />
      {/* <Sidebar /> */}
      <FilterBar />
      <Answer />
      <FooterAdmin />
    </div>
  );
}

export default Dashboard;
