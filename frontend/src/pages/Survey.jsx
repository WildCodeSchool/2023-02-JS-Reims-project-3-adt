import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <h2>Select family</h2>
      {categories.map((category) => (
        <Link key={category.id} to={`/survey/${category.id}`}>
          <button type="button">{category.title}</button>
        </Link>
      ))}
    </div>
  );
}

export default Survey;
