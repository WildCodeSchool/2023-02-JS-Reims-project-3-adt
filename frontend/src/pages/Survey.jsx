import { useState } from "react";
import NavbarUser from "../components/NavbarUser";
import FooterUser from "../components/FooterUser";
import Question from "../components/Question";
import Categories from "../components/Categories";

function Survey() {
  const [currentCategoryId, setCurrentCategoryId] = useState(1);
  return (
    <div>
      <NavbarUser />
      <Categories
        currentCategoryId={currentCategoryId}
        setCurrentCategoryId={setCurrentCategoryId}
      />
      <Question
        currentCategoryId={currentCategoryId}
        setCurrentCategoryId={setCurrentCategoryId}
      />
      <FooterUser />
    </div>
  );
}

export default Survey;
