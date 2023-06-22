import NavbarUser from "../components/NavbarUser";
import FooterUser from "../components/FooterUser";
import Question from "../components/Question";
import Categories from "../components/Categories";

function Survey() {
  return (
    <div className="survey">
      <NavbarUser />
      <Categories />
      <Question />
      <FooterUser />
    </div>
  );
}

export default Survey;
