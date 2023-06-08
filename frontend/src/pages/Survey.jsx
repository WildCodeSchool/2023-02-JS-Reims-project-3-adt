import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Survey() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("/api/category")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Select familly</h2>
      {category.map((categorie) => (
        <Link key={categorie.id} to={`/survey/${categorie.id}`}>
          <button type="button"> {categorie.title}</button>
        </Link>
      ))}
    </div>
  );
}

export default Survey;
