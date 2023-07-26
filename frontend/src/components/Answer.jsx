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
    <div
      style={{ overflow: "auto", padding: "2rem", justifyContent: "center" }}
    >
      <h2 style={{ textAlign: "center", padding: "1rem" }}>
        Réponses de l'utilisateur : {userResponses[0] && userResponses[0].email}
      </h2>
      <table className="table">
        <thead>
          <tr className="table1">
            <th className="table-column">Response</th>
            <th className="table-column">Question</th>
          </tr>
        </thead>
        <tbody>
          {userResponses.map((response) => (
            <tr key={response.id}>
              <td className="table-row">{response.response}</td>
              <td className="table-row">{response.questionContent}</td>
            </tr>
            // <li key={response.id}>
            //   Question : {response.questionContent} | Réponse :{" "}
            //   {response.response}
            // </li>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Answer;
