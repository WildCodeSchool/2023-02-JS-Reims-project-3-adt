import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

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
      <h1 className="central-area1">Liste des utilisateurs :</h1>
      <table className="central-table">
        <tr
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: "white",
            border: "1px solid",
            textAlign: "center",
          }}
        >
          <td
            style={{
              padding: "1rem",
              borderBottom: "1px solid lightgrey",
              borderTop: "1px solid lightgrey",
            }}
          >
            Id
          </td>
          <td
            style={{
              padding: "1rem",
              borderBottom: "1px solid lightgrey",
              borderTop: "1px solid lightgrey",
            }}
          >
            Prénom
          </td>
          <td
            style={{
              padding: "1rem",
              borderBottom: "1px solid lightgrey",
              borderTop: "1px solid lightgrey",
            }}
          >
            Nom
          </td>
          <td
            style={{
              padding: "1rem",
              borderBottom: "1px solid lightgrey",
              borderTop: "1px solid lightgrey",
            }}
          >
            Structure
          </td>
          <td
            style={{
              padding: "1rem",
              borderBottom: "1px solid lightgrey",
              borderTop: "1px solid lightgrey",
            }}
          >
            Resultat
          </td>
        </tr>
        {users.map((user) => (
          <tr key={user.id} className="central-answer">
            <td>{user.id}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.company_name}</td>
            <td>
              <Link to={`/result/${user.id}`}>
                <AiOutlineEye />
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default User;
