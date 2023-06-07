import React from "react";
import "./Scoring.css";

export default function Scoring() {
  return (
    <div className="fullScoring">
      <div className="score">
        <span className="scoreText">04/20</span>
      </div>

      <div className="beContacted">
        <button type="button">être contacter</button>
      </div>

      <div className="notbeContacted">
        <button type="button">ne pas être contacter</button>
      </div>
    </div>
  );
}
