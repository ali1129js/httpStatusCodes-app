import React, { Component } from "react";
import Head from "./Head";
import Grid from "./Grid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      decks: "0xx",
    };
  }
  changeSet = (deck) => {
    this.setState({ decks: deck });
  };
  render() {
    const { cards } = this.state;
    return (
      <div className="app">
        <Head changeSet={this.changeSet} />
        <Grid cards={cards} />
      </div>
    );
  }
}

export default App;
