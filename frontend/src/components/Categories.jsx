import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Category.css";

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
      <div className="hotelCategory">
        <h2>HEBERGEMENT</h2>
        <div className="categories">
          {categories.map((category) => (
            <Link key={category.id} to={`/categories/${category.id}`}>
              <div className="categoryList">
                <img src={category.image} alt={category.title} />
                <span>{category.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
