import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ListAnswer.css";

function Answer() {
  const [userResponses, setUserResponses] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserResponses = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/users/${userId}/answers`
        );
        setUserResponses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserResponses();
  }, [userId]);

  return (
    <div
      style={{
        overflow: "auto",
        padding: "2rem",
        justifyContent: "center",
        flexGrow: "1",
      }}
    >
      <table className="title-table">
        <tbody>
          <tr>
            <th className="header-cell">L'email de l'utilisateur </th>
            <th className="header-cell">
              {userResponses[0] && userResponses[0].email}
            </th>
          </tr>
          <tr>
            <td>Numéro de téléphone </td>
            <td>{userResponses[0] && userResponses[0].phone_number}</td>
          </tr>
        </tbody>
      </table>

      <table className="table">
        <thead>
          <tr className="table1">
            <th className="table-column1">Question</th>
            <th className="table-column">Réponse</th>
            <th className="table-column">Choix Réponse</th>
          </tr>
        </thead>
        <tbody>
          {userResponses.map((response) => (
            <tr key={response.id}>
              <td className="table-row">{response.questionContent}</td>
              <td className="table-row">{response.response}</td>
              <td className="table-row1">
                <input
                  style={{ marginLeft: "1rem", marginRight: "0.5rem" }}
                  type="radio"
                  id={`answer${response.id}-atteint`}
                  name={`answer${response.id}`}
                  value="Atteint"
                />
                <label htmlFor={`answer${response.id}`}>Atteint</label>
                <input
                  style={{ marginLeft: "1rem", marginRight: "0.5rem" }}
                  type="radio"
                  id={`answer${response.id}-not-atteint`}
                  name={`answer${response.id}`}
                  value="Non Atteint"
                />
                <label htmlFor={`answer${response.id}`}>Non Atteint</label>
                <input
                  style={{ marginLeft: "1rem", marginRight: "0.5rem" }}
                  type="radio"
                  id={`answer${response.id}-non-concerne`}
                  name={`answer${response.id}`}
                  value="Non Concerné"
                />
                <label htmlFor={`answer${response.id}`}>Non Concerné</label>
                <input
                  style={{ marginLeft: "1rem", marginRight: "0.5rem" }}
                  type="radio"
                  id={`answer${response.id}-ne-sais-pas`}
                  name={`answer${response.id}`}
                  value="Ne sais pas"
                />
                <label htmlFor={`answer${response.id}`}>Ne sais pas</label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Answer;
