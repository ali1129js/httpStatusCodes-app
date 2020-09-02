import React, { Fragment } from "react";
import "./grid.css";

const Grid = ({ cards, flipCard, cardClicked }) => {
  const shuffledArr = cards.sort(() => Math.random() - 0.5);

  const renderCards = shuffledArr.map((card) => (
    <Fragment key={card.id}>
      <button className="front" onClick={() => cardClicked(card.id)}>
        {card.front}
      </button>
      <button className="back" onClick={() => cardClicked(card.id)}>
        {card.back}
      </button>
    </Fragment>
  ));

  return <div className="row">{renderCards}</div>;
};
export default Grid;

// shuffledArr :
// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//
//   return array;
// }
