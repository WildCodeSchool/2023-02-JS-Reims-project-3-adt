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
      <figure>
        {categories.map((category) => (
          <Link key={category.id} to={`/categories/${category.id}`}>
            <div>
              <img src={category.image} alt={category.title} />
              <figcaption>{category.title}</figcaption>
            </div>
          </Link>
        ))}
      </figure>
    </section>
  );
}

export default Categories;
