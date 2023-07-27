import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/users`
      )
      .then((response) => {
        const uniqueUsers = response.data.reverse();

        setUsers(uniqueUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="central-area">
      <h1>Liste des utilisateurs :</h1>
      <table>
        <thead>
          <tr
            style={{
              position: "sticky",
              top: 0,
              backgroundColor: "white",
            }}
          >
            <th
              style={{
                padding: "1rem",
                borderBottom: "1px solid lightgrey",
                borderTop: "1px solid lightgrey",
              }}
            >
              Id
            </th>
            <th
              style={{
                padding: "1rem",
                borderBottom: "1px solid lightgrey",
                borderTop: "1px solid lightgrey",
              }}
            >
              Prénom
            </th>
            <th
              style={{
                padding: "1rem",
                borderBottom: "1px solid lightgrey",
                borderTop: "1px solid lightgrey",
              }}
            >
              Nom
            </th>
            <th
              style={{
                padding: "1rem",
                borderBottom: "1px solid lightgrey",
                borderTop: "1px solid lightgrey",
              }}
            >
              Structure
            </th>
            <th
              style={{
                padding: "1rem",
                borderBottom: "1px solid lightgrey",
                borderTop: "1px solid lightgrey",
              }}
            >
              {" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.company_name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/result/${user.id}`}>Voir ses réponses</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
