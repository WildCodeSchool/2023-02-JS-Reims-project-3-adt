import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import PropTypes from "prop-types";
import "./Question.css";

function Question({ currentCategoryId, setCurrentCategoryId }) {
  const [questions, setQuestions] = useState([]);
  const { categoryId } = useParams();
  const navigate = useNavigate();

  /* function button */
  const handleNextPage = () => {
    setCurrentCategoryId(currentCategoryId + 1);
    navigate(`/categories/${parseInt(categoryId, 10) + 1}`);
  };

  const handlePreviousPage = () => {
    setCurrentCategoryId(currentCategoryId - 1);
    navigate(`/categories/${parseInt(categoryId, 10) - 1}`);
  };

  /* function input */
  const handleResponseChange = (questionId, response) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return { ...question, response };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/questions`
      )
      .then((response) => setQuestions(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
            <div className={`questionText questionText${question.id}`}>
              <p className="questionContent">
                {question.content}
                {question.tooltip_content != null && "    📌"}
              </p>
              <p className="mandatoryLevel">{question.mandatory_level}</p>
            </div>

            {question.tooltip_content != null && (
              <Tooltip
                className="tooltip"
                anchorSelect={`.questionText${question.id}`}
              >
                <div>
                  <p>{question.tooltip_content}</p>
                </div>
              </Tooltip>
            )}

            <div className="answer">
              <input
                type="checkbox"
                required
                id={`answer${question.id}`}
                name={`answer${question.id}`}
                value="atteint"
                checked={question.response === "Atteint"}
                onChange={() => handleResponseChange(question.id, "Atteint")}
              />
              <label htmlFor={`answer${question.id}`} className="answerChoice">
                Atteint
              </label>
              <input
                type="checkbox"
                required
                id={`answer${question.id}`}
                name={`answer${question.id}`}
                value="No Atteint"
                checked={question.response === "Not Atteint"}
                onChange={() =>
                  handleResponseChange(question.id, "Not Atteint")
                }
              />
              <label htmlFor={`answer${question.id}`} className="answerChoice">
                Non Atteint
              </label>
              <input
                type="checkbox"
                required
                id={`answer${question.id}`}
                name={`answer${question.id}`}
                value="ne sais pas"
                checked={question.response === "Non Concerné"}
                onChange={() =>
                  handleResponseChange(question.id, "Non Concerné")
                }
              />
              <label htmlFor={`answer${question.id}`} className="answerChoice">
                Non Concerné
              </label>

              <input
                type="checkbox"
                required
                id={`answer${question.id}`}
                name={`answer${question.id}`}
                value="ne sais pas"
                checked={question.response === "Ne sais pas"}
                onChange={() =>
                  handleResponseChange(question.id, "Ne sais pas")
                }
              />
              <label htmlFor={`answer${question.id}`} className="answerChoice">
                Ne sais pas
              </label>
            </div>
          </div>
        ))}
      <div className="buttonContainer">
        {parseInt(categoryId, 10) < 6 && (
          <button
            type="button"
            className="questionBtn"
            onClick={handleNextPage}
          >
            Suivant
          </button>
        )}

        {parseInt(categoryId, 10) === 6 && (
          <button type="button" className="questionBtn">
            Terminer
          </button>
        )}
        {parseInt(categoryId, 10) > 1 && (
          <button
            type="button"
            className="questionBtn"
            onClick={handlePreviousPage}
          >
            Précédent
          </button>
        )}
      </div>
      {/* <div className="counters">
        <p>Nombre de critères atteints : {countCriteriaMet}</p>
        <p>Nombre de critères non atteints : {criteriumNotReached}</p>
        <p>Nombre de critères non concernés : {countNotApplicable}</p>
        <p>Nombre de critères inconnus : {countUnknown}</p>
      </div>
      <div>
        <p>
          pourcentage :{" "}
          {Math.floor(
            (countCriteriaMet / (questions.length - countNotApplicable)) * 100
          )}
        </p>
      </div> */}
    </section>
  );
}

Question.propTypes = {
  currentCategoryId: PropTypes.number.isRequired,
  setCurrentCategoryId: PropTypes.func.isRequired,
};

export default Question;
