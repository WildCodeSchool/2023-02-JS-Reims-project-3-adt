import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Question.css";

function Question() {
  const [questions, setQuestions] = useState([]);
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate(`/categories/${parseInt(categoryId, 10) + 1}`);
  };
  const handlePreviousPage = () => {
    navigate(`/categories/${parseInt(categoryId, 10) - 1}`);
  };

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
    <section className="surveyQuestion">
      {questions.map((question) => (
        <div className="questions">
          <div key={question.id} className="questionList">
            <p className="questionContent">{question.content}</p>
            <p className="mandatoryLevel">{question.mandatory_level}</p>
          </div>
          <div className="answer">
            <label htmlFor="answer" className="answerChoice">
              <input
                type="radio"
                required
                id="answer"
                name="answer"
                className="testradio"
              />
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
              <input type="radio" required id="answer" name="answer" />
              Ne sais pas
            </label>
          </div>
        </div>
      ))}
      <div className="btn">
        {categoryId <= 6 && (
          <div className="questionBtnNext">
            <button className="btnNext" type="button" onClick={handleNextPage}>
              Suivant
            </button>
          </div>
        )}
        {categoryId > 1 && (
          <div className="questionBtnPrevious">
            <button
              className="btnPrevious"
              type="button"
              onClick={handlePreviousPage}
            >
              Précédent
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
export default Question;
