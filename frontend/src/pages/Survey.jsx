/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";

import "../styles/Survey.css";
import Obligatory from "../components/Obligatory";

function Survey() {
  const famillyquestion = ["Energy", "Watter"];

  return (
    <>
      <ul>
        <li>
          Catégorie
          <ul>
            {question.map((question) => {
              return (
                <li key={question.content}>
                  <Link to={`/formulaire/${category.title}`}>
                    {question.category_id}
                  </Link>
                </li>
              );
            })}
          </ul>
          ;
        </li>
      </ul>
      <div>
        ;
        <Obligatory />
      </div>
    </>
  );
}
export default Survey;
