import React, { Component } from "react";
import Head from "./Head";
import Grid from "./Grid";
import { deck2xx, deck3xx, deck4xx, deck5xx } from "./decks/index.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [{ front: "201", back: "ok", id: "id" }],
      decks: "0xx",
      bools: { is2xx: false, is3xx: false, is4xx: false, is5xx: false },
    };
  }
  changeSet = (e) => {
    const selectedSet = e.target.value;
    this.setState({ decks: selectedSet });
    switch (selectedSet) {
      case "2xx":
        this.setState({
          bools: { is2xx: true, is3xx: false, is4xx: false, is5xx: false },
        });
        break;
      case "3xx":
        this.setState({
          bools: { is2xx: false, is3xx: true, is4xx: false, is5xx: false },
        });
        break;
      case "4xx":
        this.setState({
          bools: { is2xx: false, is3xx: false, is4xx: true, is5xx: false },
        });
        break;
      case "5xx":
        this.setState({
          bools: { is2xx: false, is3xx: false, is4xx: false, is5xx: true },
        });
        break;
      default:
        return;
    }
  };
  handleLoad = () => {
    switch (this.state.decks) {
      case "2xx":
        this.setState((prevState) => ({
          ...prevState,
          cards: deck2xx,
        }));
        break;
      case "3xx":
        this.setState({ cards: deck3xx });
        break;
      case "4xx":
        this.setState({ cards: deck4xx });
        break;
      case "5xx":
        this.setState({ cards: deck5xx });
        break;
      default:
        return;
    }
  };
  flipCard = (id) => {
    console.log(id);
  };
  cardClicked = (id) => {
    console.log("Card with id ", id, "was Clicked");
  };
  render() {
    return (
      <div className="container">
        <Head
          changeSet={this.changeSet}
          isSelected={this.state.isSelected}
          getColor={this.getColor}
          bools={this.state.bools}
        />
        <button onClick={this.handleLoad} className="btn btn-outline-light m-2">
          Load Cards {this.state.decks}
        </button>
        <Grid
          cards={this.state.cards}
          flipCard={this.flipCard}
          cardClicked={this.cardClicked}
        />
      </div>
    );
  }
}

export default App;
