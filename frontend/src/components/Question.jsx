import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Question.css";

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

  const handleResponseChange = (questionId, response) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return { ...question, response };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  return (
    <div className="question">
      {questions.map((question) => (
        <div className="surveyQuestion">
          <div key={question.id} className="questionList">
            <p>{question.content}</p>
            <p>{question.mandatory_level}</p>
          </div>
          <label htmlFor="answer" className="answerChoice">
            <input type="radio" required id="answer" name="answer" />
            Atteint
          </label>
          <label htmlFor="answer" className="answerChoice">
            <input type="radio" required id="answer" name="answer" />
            Non Atteint
          </label>
          <label htmlFor="answer" className="answerChoice">
            <input type="radio" required id="answer" name="answer" />
            Non Concerné
          </label>
          <label htmlFor="answer" className="answerChoice">
            <input
              type="radio"
              required
              id="answer"
              name="answer"
              value="ne sais pas"
              checked={question.response === "not atteint"}
              onChange={() => handleResponseChange(question.id, "not atteint")}
            />
            Ne sais pas
          </label>
        </div>
      ))}
    </div>
  );
}

export default Question;
