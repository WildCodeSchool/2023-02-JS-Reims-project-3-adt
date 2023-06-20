import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/categories`
      )
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section>
      <div>
        {categories.map((category) => (
          <Link key={category.id} to={`/categories/${category.id}`}>
            <div>
              <img src={category.image} alt={category.title} />
              <span>{category.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
