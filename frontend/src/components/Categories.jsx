import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const { categoryId } = useParams();

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
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className="category-link"
          >
            <figure
              className={`categoryList ${
                category.id === parseInt(categoryId, 10) && "active"
              }`}
            >
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
