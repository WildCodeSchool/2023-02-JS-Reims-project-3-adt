import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Question() {
  const [questions, setQuestions] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/categories/${categoryId}/questions`
      )
      .then((response) => setQuestions(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.content}</p>
          <p>{question.mandatory_level}</p>
        </div>
      ))}
    </div>
  );
}

export default Question;
