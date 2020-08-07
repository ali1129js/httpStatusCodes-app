import React from "react";
import Card from "./Card";
const Grid = ({ cards, flipCard }) => {
  const renderCards = cards.map((card) => (
    <div className="col-2" key={card.id}>
      <Card
        flipCard={flipCard(card.id)}
        front={card.front}
        back={card.back}
        id={card.id}
      />
    </div>
  ));
  console.log(renderCards);
  return <div className="row">{renderCards}</div>;
};
export default Grid;
