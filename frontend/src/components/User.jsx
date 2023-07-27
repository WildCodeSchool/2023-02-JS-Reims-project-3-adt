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
            background: "#aedbb8",
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
            Email
          </th>
          <th
            style={{
              padding: "1rem",
              borderBottom: "1px solid lightgrey",
              borderTop: "1px solid lightgrey",
            }}
          >
            Résultat
          </th>
        </tr>
        {users.map((user) => (
          <tr key={user.id} className="central-answer">
            <td className="central-answer1">{user.id}</td>
            <td className="central-answer1">{user.firstname}</td>
            <td className="central-answer1">{user.lastname}</td>
            <td className="central-answer1">{user.company_name}</td>
            <td className="central-answer1">{user.email}</td>
            <td className="central-answer1">
              <Link to={`/result/${user.id}`}>
                <AiOutlineEye style={{ fontSize: "25px" }} />
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default User;
