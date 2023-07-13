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

  const handleResponseChange = (answeredQuestion, response) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === answeredQuestion.id) {
        return { ...question, response };
      }
      return question;
    });

    setQuestions(updatedQuestions);
  };

  useEffect(() => {
    const knownCategory = questions.find(
      (question) => question.categoryId === parseInt(categoryId, 10)
    );

    if (!knownCategory) {
      axios
        .get(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/categories/${categoryId}/questions`
        )
        .then((response) => {
          setQuestions([...questions, ...response.data]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [categoryId]);

  const mandatoryQuestions = questions.filter(
    (question) => question.mandatory_level === "Obligatoire"
  );
  const essentialQuestions = questions.filter(
    (question) => question.mandatory_level === "Essentiel"
  );

  const countCriteriaMet = questions.filter(
    (question) => question.response === "Atteint"
  ).length;
  const criteriumNotReached = questions.filter(
    (question) => question.response === "Non Atteint"
  ).length;
  const countNotApplicable = questions.filter(
    (question) => question.response === "Non Concerné"
  ).length;
  const countUnknown = questions.filter(
    (question) => question.response === "Ne sais pas"
  ).length;

  const pourcentage = (questionList) => {
    const divisor =
      questionList.length -
      questionList.filter((question) => question.response === "Non Concerné")
        .length;

    if (divisor === 0) {
      return 0;
    }

    return (
      (100 *
        questionList.filter((question) => question.response === "Atteint")
          .length) /
      divisor
    ).toFixed();
  };

  const scoreToNextPage = () => {
    const unknown = mandatoryQuestions.find(
      (question) => question.response === "Ne sais pas"
    );

    if (unknown) {
      return "/resultat/inconnu";
    }

    const mandatoryScore = parseInt(pourcentage(mandatoryQuestions), 10);

    if (mandatoryScore < 100) {
      return "/resultat/non";
    }

    const essentialScore = parseInt(pourcentage(essentialQuestions), 10);

    if (essentialScore < 80) {
      const unknownEssential = essentialQuestions.find(
        (question) => question.response === "Ne sais pas"
      );

      if (unknownEssential) {
        return "/resultat/inconnu";
      }

      return "/resultat/non";
    }

    return "/resultat/oui";
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
                  onChange={() => handleResponseChange(question, "Atteint")}
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
                  onChange={() => handleResponseChange(question, "Non Atteint")}
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
                    handleResponseChange(question, "Non Concerné")
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
                  onChange={() => handleResponseChange(question, "Ne sais pas")}
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
            onClick={() => navigate(scoreToNextPage())}
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
          Pourcentage des questions répondues (Obligatoire) :
          {pourcentage(mandatoryQuestions)}%
        </p>
        <p>
          Pourcentage des questions répondues (Essentiel) :
          {pourcentage(essentialQuestions)}%
        </p>
      </div>
    </section>
  );
}

export default Question;
