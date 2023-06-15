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
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          {/* <h1>{question.title}</h1> */}
          {/* <h2>{question.category_id}</h2> */}
          <p>{question.content}</p>
          <p>
            <mark>{question.tooltip_content}</mark>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Question;
