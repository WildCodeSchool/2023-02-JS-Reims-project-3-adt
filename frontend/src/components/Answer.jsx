import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    <div style={{ overflow: "auto", padding: "1rem" }}>
      <h2>
        L'email de l'utilisateur : {userResponses[0] && userResponses[0].email}
      </h2>
      <h2>
        Numéro de téléphone :{" "}
        {userResponses[0] && userResponses[0].phone_number}
      </h2>

      <table>
        {userResponses.map((response) => (
          <tr
            key={response.id}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              padding: "1rem",
            }}
          >
            <td style={{ gridColumn: "1 / -1", marginBottom: "0.5rem" }}>
              {response.questionContent}
            </td>
            <td>{response.response}</td>
            <td style={{ display: "flex" }}>
              <input
                style={{ marginLeft: "1rem", marginRight: "0.5rem" }}
                type="radio"
                id={`answer${response.id}-atteint`}
                name={`answer${response.id}`}
                value="Atteint"
              />
              <label htmlFor={`answer${response.id}`} className="answerChoice">
                Atteint
              </label>
              <input
                style={{ marginLeft: "1rem", marginRight: "0.5rem" }}
                type="radio"
                id={`answer${response.id}-not-atteint`}
                name={`answer${response.id}`}
                value="Non Atteint"
              />
              <label htmlFor={`answer${response.id}`} className="answerChoice">
                Non Atteint
              </label>
              <input
                style={{ marginLeft: "1rem", marginRight: "0.5rem" }}
                type="radio"
                id={`answer${response.id}-non-concerne`}
                name={`answer${response.id}`}
                value="Non Concerné"
              />
              <label htmlFor={`answer${response.id}`} className="answerChoice">
                Non Concerné
              </label>
              <input
                style={{ marginLeft: "1rem", marginRight: "0.5rem" }}
                type="radio"
                id={`answer${response.id}-ne-sais-pas`}
                name={`answer${response.id}`}
                value="Ne sais pas"
              />
              <label htmlFor={`answer${response.id}`} className="answerChoice">
                Ne sais pas
              </label>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Answer;
