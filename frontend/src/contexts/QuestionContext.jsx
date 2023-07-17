import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const QuestionContext = createContext();

export function QuestionProvider({ children }) {
  const [questions, setQuestions] = useState([]);

  const updateQuestionResponse = (answeredQuestion, response) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === answeredQuestion.id) {
        return { ...question, response };
      }
      return question;
    });

    setQuestions(updatedQuestions);
  };

  const contextValue = useMemo(
    () => ({
      questions,
      setQuestions,
      updateQuestionResponse,
    }),
    [questions]
  );

  return (
    <QuestionContext.Provider value={contextValue}>
      {children}
    </QuestionContext.Provider>
  );
}

QuestionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
