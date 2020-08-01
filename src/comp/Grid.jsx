import React, { useState } from "react";
import Card from "./Card";
//maps data and return cards components

const Grid = ({ cards }) => {
  const makeCards = () => {
    cards.map((card) => <Card />);
  };
  return <div className="grid">{makeCards()}</div>;
};
export default Grid;
