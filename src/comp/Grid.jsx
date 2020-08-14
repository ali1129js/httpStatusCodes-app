import React from "react";

const Grid = ({ cards, flipCard, cardClicked }) => {
  const frontsArr = cards.map(({ front }) => front);
  const backsArr = cards.map(({ back }) => back);
  const mixedArr = [...frontsArr, ...backsArr];

  const shuffledArr = mixedArr.sort(() => Math.random() - 0.5);

  console.log(shuffledArr, mixedArr);
  const renderCards = mixedArr.map((card, i) => <li key={i}>{card}</li>);

  return <div className="row">{renderCards}</div>;
};
export default Grid;

// shuffledArr : Fisher-Yates (aka Knuth) Shuffle.
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
