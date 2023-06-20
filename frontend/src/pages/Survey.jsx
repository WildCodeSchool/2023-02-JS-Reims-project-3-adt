import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarUser from "../components/NavbarUser";
import FooterUser from "../components/FooterUser";

function Survey() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("/api/category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <NavbarUser />
      <h2>HEBERGEMENT</h2>
      {categories.map((category) => (
        <Link key={category.id} to={`/survey/${category.id}`}>
          <button type="button">{category.title}</button>
        </Link>
      ))}
      <FooterUser />
    </div>
  );
}

export default Survey;
