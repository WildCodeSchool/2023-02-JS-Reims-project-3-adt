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
    <div>
      <h2>Réponses de l'utilisateur:{userId}</h2>
      <ul>
        {userResponses.map((response) => (
          <li key={response.id}>
            Question : {response.question.content} | Réponse : {response.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Answer;
