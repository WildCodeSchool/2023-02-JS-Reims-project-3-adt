import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Question() {
  const [question, setQuestion] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/categories/${categoryId}/questions`
      )
      .then((response) => {
        setQuestion(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {question.map((categorie) => (
        <div key={categorie.id}>
          <h1>{categorie.title}</h1>
          <h2>{categorie.categoy_id}</h2>
          <p>{categorie.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Question;
