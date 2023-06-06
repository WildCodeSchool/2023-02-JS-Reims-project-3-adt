import React from "react";
import "./Scoring.css";

export default function Scoring() {
  return (
    <div className="FullScoring">
      <div className="Score">
        <span className="ScoreText">04/20</span>
      </div>

      <div className="BeContacted">
        <button type="button">être contacter</button>
      </div>

      <div className="NotBeContacted">
        <button type="button">ne pas être contacter</button>
      </div>
    </div>
  );
}
