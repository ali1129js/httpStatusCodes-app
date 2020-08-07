import React from "react";
import "./card.css";
const Card = ({ front, back, id }) => {
  return (
    <div className="card">
      <div className="front">{front}</div>
      <div className="back">{back}</div>
    </div>
  );
};
export default Card;
