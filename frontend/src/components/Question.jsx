import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./Question.css";

function Question({ currentCategoryId, setCurrentCategoryId }) {
  const [questions, setQuestions] = useState([]);
  const { categoryId } = useParams();
  const navigate = useNavigate();

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

  const handleNextPage = () => {
    setCurrentCategoryId(currentCategoryId + 1);
    navigate(`/categories/${parseInt(categoryId, 10) + 1}`);
  };

  const handlePreviousPage = () => {
    setCurrentCategoryId(currentCategoryId - 1);
    navigate(`/categories/${parseInt(categoryId, 10) - 1}`);
  };

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
    <section className="surveyQuestion">
      <div className="small-container" />
      {questions
        .filter((question) => {
          return (
            parseInt(question.category_id, 10) === parseInt(categoryId, 10)
          );
        })
        .map((question) => (
          <div key={question.id} className="questions">
            <div className="questionList">
              <p className="questionContent">{question.content}</p>
              <p className="mandatoryLevel">{question.mandatory_level}</p>
            </div>
            <div className="answer">
              <input
                type="checkbox"
                required
                id={`answer${question.id}-atteint`}
                name={`answer${question.id}`}
                value="Atteint"
                onChange={() => handleResponseChange(question.id, "Atteint")}
                checked={question.response === "Atteint"}
              />
              <label htmlFor={`answer${question.id}`} className="answerChoice">
                Atteint
              </label>
              <input
                type="checkbox"
                required
                id={`answer${question.id}-not-atteint`}
                name={`answer${question.id}`}
                value="No Atteint"
                onChange={() =>
                  handleResponseChange(question.id, "Non Atteint")
                }
                checked={question.response === "Non Atteint"}
              />
              <label htmlFor={`answer${question.id}`} className="answerChoice">
                Non Atteint
              </label>
              <input
                type="checkbox"
                required
                id={`answer${question.id}-non-concerne`}
                name={`answer${question.id}`}
                value="ne sais pas"
                onChange={() =>
                  handleResponseChange(question.id, "Non Concerné")
                }
                checked={question.response === "Non Concerné"}
              />
              <label htmlFor={`answer${question.id}`} className="answerChoice">
                Non Concerné
              </label>

              <input
                type="checkbox"
                required
                id={`answer${question.id}-ne-sais-pas`}
                name={`answer${question.id}`}
                value="ne sais pas"
                onChange={() =>
                  handleResponseChange(question.id, "Ne sais pas")
                }
                checked={question.response === "Ne sais pas"}
              />
              <label htmlFor={`answer${question.id}`} className="answerChoice">
                Ne sais pas
              </label>
            </div>
          </div>
        ))}
      <div className="buttonContainer">
        {parseInt(categoryId, 10) < 6 && (
          <div className="questionBtnPrevious">
            <button
              type="button"
              className="nextButton"
              onClick={handleNextPage}
            >
              Suivant
            </button>
          </div>
        )}

        {parseInt(categoryId, 10) === 6 && (
          <div className="questionBtnPrevious">
            <button
              type="button"
              className="nextButton"
              onClick={handleNextPage}
            >
              Terminer
            </button>
          </div>
        )}

        {parseInt(categoryId, 10) > 1 && (
          <div className="questionBtnNext">
            <button
              type="button"
              className="previousButton"
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

Question.propTypes = {
  currentCategoryId: PropTypes.shape.isRequired,
  setCurrentCategoryId: PropTypes.func.isRequired,
};

export default Question;
