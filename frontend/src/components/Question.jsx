import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./Question.css";
// import Tooltip from "./Tooltip";

function Question({ currentCategoryId, setCurrentCategoryId }) {
  const [questions, setQuestions] = useState([]);
  const { categoryId } = useParams();
  const navigate = useNavigate();
  // Obligatoire
  const [countCriteriaMetObligatoire, setCountCriteriaMetObligatoire] =
    useState(0);
  const [countNotApplicableObligatoire, setCountNotApplicableObligatoire] =
    useState(0);
  const [countUnknownObligatoire, setCountUnknownObligatoire] = useState(0);
  const [criteriumNotReachedObligatoire, setCriteriumNotReachedObligatoire] =
    useState(0);
  // Essentiel
  const [countCriteriaMetEssentiel, setCountCriteriaMetEssentiel] = useState(0);
  const [countNotApplicableEssentiel, setCountNotApplicableEssentiel] =
    useState(0);
  const [countUnknownEssentiel, setCountUnknownEssentiel] = useState(0);
  const [criteriumNotReachedEssentiel, setCriteriumNotReachedEssentiel] =
    useState(0);

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

  const terminer = () => {
    for (let i = 0; i < questions.length; i += 1)
      if (!questions[i].response) {
        // return alert("nop");
      } else if (questions[i].mandatory_level === "Obligatoire") {
        if (questions[i].response === "Atteint") {
          setCountCriteriaMetObligatoire(countCriteriaMetObligatoire + 1);
        } else if (questions[i].response === "Non Concerné") {
          setCountNotApplicableObligatoire(countNotApplicableObligatoire + 1);
        } else if (questions[i].response === "Ne sais pas") {
          setCountUnknownObligatoire(countUnknownObligatoire + 1);
        } else if (questions[i].response === "Non Atteint") {
          setCriteriumNotReachedObligatoire(criteriumNotReachedObligatoire + 1);
        }
      } else if (questions[i].mandatory_level === "Essentiel") {
        // console.log(questions[i].response);
        if (questions[i].response === "Atteint") {
          setCountCriteriaMetEssentiel(countCriteriaMetEssentiel + 1);
        } else if (questions[i].response === "Non Concerné") {
          setCountNotApplicableEssentiel(countNotApplicableEssentiel + 1);
        } else if (questions[i].response === "Ne sais pas") {
          setCountUnknownEssentiel(countUnknownEssentiel + 1);
        } else if (questions[i].response === "Non Atteint") {
          setCriteriumNotReachedEssentiel(criteriumNotReachedEssentiel + 1);
        }
      }
    // console.log(countCriteriaMetObligatoire, countCriteriaMetEssentiel);

    return navigate("/scoring");
  };
  // console.log(questions);
  // const test = () => {
  //   for (let i = 0; i < questions.length; i++)
  //     questions[i].response = "Atteint";
  // };

  return (
    <section className="surveyQuestion">
      {/* <button onClick={test}>test</button> */}
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
              {/* {question.tooltip_content && (
                <Tooltip text={question.tooltip_content}>
                  <span className="material-symbols-outlined">info</span>
                </Tooltip>
              )} */}
              <p className="mandatoryLevel">{question.mandatory_level}</p>
            </div>
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
          <button type="button" className="questionBtn" onClick={terminer}>
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
