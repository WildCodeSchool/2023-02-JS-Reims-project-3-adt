import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/answers`
      )
      .then((response) => {
        const uniqueUsers = Array.from(
          new Set(response.data.map((user) => user.user_id))
        );

        setUsers(uniqueUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs :</h1>
      <ul>
        {users.map((userId) => (
          <li key={userId}>
            User ID: {userId}
            <Link to={`/result/${userId}`}>
              <button type="button">Voir ces réponses</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
