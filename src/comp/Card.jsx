import React from "react";
import "./card.css";

const Card = ({ front, back, id, cardClicked }) => {
  return (
    <div className="card" onClick={() => cardClicked(id)}>
      <div className="front">{front}</div>
      <div className="back">{back}</div>
    </div>
  );
};
export default Card;
