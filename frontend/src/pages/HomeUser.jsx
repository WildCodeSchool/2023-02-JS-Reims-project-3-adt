import NavbarUser from "../components/NavbarUser";
import FooterUser from "../components/FooterUser";
import Instruction from "../components/Instruction";
import "../App.css";

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
