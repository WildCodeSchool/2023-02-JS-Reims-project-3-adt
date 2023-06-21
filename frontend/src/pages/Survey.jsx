import { useState } from "react";
import NavbarUser from "../components/NavbarUser";
import FooterUser from "../components/FooterUser";
import Question from "../components/Question";
import Categories from "../components/Categories";

function Survey() {
  const [indexPage, setIndexPage] = useState([]);

  return (
    <div>
      <NavbarUser />
      <Categories setIndexPage={setIndexPage} />
      <Question indexPage={indexPage} />

      <FooterUser />
    </div>
  );
}

export default Survey;
