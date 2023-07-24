import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ListAnswer.css";

function ListAnswer() {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/answers`
      )
      .then((response) => {
        setHistories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="history">
      <h1>List de response</h1>
      <table className="table">
        <thead>
          <tr className="table1">
            <th className="table-column">User Id</th>
            <th className="table-column">Response</th>
            <th className="table-column">Mandatory Level</th>
            <th className="table-column">category id</th>
            <th className="table-column">Question</th>
          </tr>
        </thead>
        <tbody>
          {histories.map((history) => (
            <tr key={history.id}>
              <td className="table-row">{history.user_id}</td>
              <td className="table-row">{history.response}</td>
              <td className="table-row">{history.mandatory_level}</td>
              <td className="table-row">{history.category_id}</td>
              <td className="table-row">{history.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListAnswer;
