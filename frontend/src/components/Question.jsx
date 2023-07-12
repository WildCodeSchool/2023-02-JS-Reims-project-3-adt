import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Question.css";

function Question() {
  const [questions, setQuestions] = useState([]);
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [countCriteriaMet, setCountCriteriaMet] = useState(0);
  const [countNotApplicable, setCountNotApplicable] = useState(0);
  const [countUnknown, setCountUnknown] = useState(0);
  const [criteriumNotReached, setCriteriumNotReached] = useState(0);

  const handleNextPage = () => {
    navigate(`/categories/${parseInt(categoryId, 10) + 1}`);
  };

  const handlePreviousPage = () => {
    navigate(`/categories/${parseInt(categoryId, 10) - 1}`);
  };

  const handleAnswer = (answer, previousAnswer) => {
    if (answer === "Atteint") {
      setCountCriteriaMet(countCriteriaMet + 1);
    } else if (answer === "Non Concerné") {
      setCountNotApplicable(countNotApplicable + 1);
    } else if (answer === "Ne sais pas") {
      setCountUnknown(countUnknown + 1);
    } else if (answer === "Non Atteint") {
      setCriteriumNotReached(criteriumNotReached + 1);
    }

    if (previousAnswer === "Atteint") {
      setCountCriteriaMet(countCriteriaMet - 1);
    } else if (previousAnswer === "Non Concerné") {
      setCountNotApplicable(countNotApplicable - 1);
    } else if (previousAnswer === "Ne sais pas") {
      setCountUnknown(countUnknown - 1);
    } else if (previousAnswer === "Non Atteint") {
      setCriteriumNotReached(criteriumNotReached - 1);
    }
  };

  const handleResponseChange = (questionId, response) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return { ...question, response };
      }
      return question;
    });
    setQuestions(updatedQuestions);
    handleAnswer(response, questions.find((q) => q.id === questionId).response);
  };

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/categories/${categoryId}/questions`
      )
      .then((response) => setQuestions([...questions, ...response.data]))
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  const calculateScore = () => {
    const totalQuestions = questions.length;
    let finalCase = null;

    for (let i = 0; i < totalQuestions; i += 1) {
      const questionList = questions[i];

      if (questionList.mandatory_level === "Obligatoire") {
        if (countUnknown > 0) {
          finalCase = "/resultat/inconnu";
          break;
        } else if (criteriumNotReached > 0) {
          finalCase = "/resultat/non";
        } else {
          finalCase = "/resultat/oui";
        }
      }

      if (questionList.mandatory_level === "essentiel") {
        const pourcentagecountCriteriaMet =
          (countCriteriaMet / (totalQuestions - countNotApplicable)) * 100;
        const essentialThreshold = 80;

        if (countUnknown > 0) {
          finalCase = "/resultat/inconnu";
          if (pourcentagecountCriteriaMet >= essentialThreshold) {
            finalCase = "/resultat/oui";
          } else {
            finalCase = "/resultat/non";
          }
          break;
        }
      }
    }

    if (finalCase) {
      navigate(finalCase);
    }
  };
  const pourcentageObli = () => {
    if (questions.mandatory_level === "Obligatoire") {
      return (countCriteriaMet / (questions.length - countNotApplicable)) * 100;
    }
    return 0;
  };

  const pourcentageEs = () => {
    if (questions.mandatory_level === "essentiel") {
      return (countCriteriaMet / (questions.length - countNotApplicable)) * 100;
    }
    return 0;
  };

  return (
    <section className="surveyQuestion">
      <div className="small-container" />
      {questions
        .filter(
          (question) =>
            parseInt(question.category_id, 10) === parseInt(categoryId, 10)
        )
        .map((question) => (
          <div key={question.id} className="question">
            <div className="questionText">
              <p>{question.content}</p>
              <p>{question.mandatory_level}</p>
            </div>
            <div className="questionOptions">
              <div className="option">
                <input
                  type="radio"
                  id={`answer${question.id}-atteint`}
                  name={`answer${question.id}`}
                  value="Atteint"
                  onChange={() => handleResponseChange(question.id, "Atteint")}
                  checked={question.response === "Atteint"}
                />
                <label htmlFor={`answer${question.id}-atteint`}>Atteint</label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  id={`answer${question.id}-not-atteint`}
                  name={`answer${question.id}`}
                  value="Non Atteint"
                  onChange={() =>
                    handleResponseChange(question.id, "Non Atteint")
                  }
                  checked={question.response === "Non Atteint"}
                />
                <label htmlFor={`answer${question.id}-not-atteint`}>
                  Non Atteint
                </label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  id={`answer${question.id}-non-concerne`}
                  name={`answer${question.id}`}
                  value="Non Concerné"
                  onChange={() =>
                    handleResponseChange(question.id, "Non Concerné")
                  }
                  checked={question.response === "Non Concerné"}
                />
                <label htmlFor={`answer${question.id}-non-concerne`}>
                  Non Concerné
                </label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  id={`answer${question.id}-ne-sais-pas`}
                  name={`answer${question.id}`}
                  value="Ne sais pas"
                  onChange={() =>
                    handleResponseChange(question.id, "Ne sais pas")
                  }
                  checked={question.response === "Ne sais pas"}
                />
                <label htmlFor={`answer${question.id}-ne-sais-pas`}>
                  Ne sais pas
                </label>
              </div>
            </div>
          </div>
        ))}
      <div className="buttonContainer">
        {parseInt(categoryId, 10) < 6 && (
          <button
            type="button"
            onClick={handleNextPage}
            className="questionBtn"
          >
            Suivant
          </button>
        )}

        {parseInt(categoryId, 10) === 6 && (
          <button
            type="button"
            className="questionBtn"
            onClick={calculateScore}
          >
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
      <div className="counters">
        <p>Nombre de critères atteints : {countCriteriaMet}</p>
        <p>Nombre de critères non atteints : {criteriumNotReached}</p>
        <p>Nombre de critères non concernés : {countNotApplicable}</p>
        <p>Nombre de critères inconnus : {countUnknown}</p>
        <p>
          Pourcentage des questions répondues (Obligatoire) :{" "}
          {pourcentageObli()}%
        </p>
        <p>
          Pourcentage des questions répondues (Essentiel) : {pourcentageEs()}%
        </p>
      </div>
    </section>
  );
}

export default Question;
