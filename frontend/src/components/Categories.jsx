import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Categories.css";

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
    <section className="category">
      <h2 className="title">HÉBERGEMENT</h2>
      <div className="list">
        {categories.map((category) => (
          <Link key={category.id} to={`/categories/${category.id}`}>
            <figure className="categoryList">
              <img
                src={`${
                  import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
                }${category.image}`}
                alt={category.title}
              />
              <figcaption>{category.title}</figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
