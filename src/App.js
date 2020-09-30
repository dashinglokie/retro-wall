import React, { Component } from "react";
import "./App.css";
import Category from "./components/Category"

class App extends Component {
  state = {
    categories: {
      wentWell: [],
      toImprove: [],
      startDoing: [],
      actionItems: []
    },
    userInput: "",
    id: 0,
    Cards: []
  };

  userInput = (e, idx) => {
    let newCards = [...this.state.Cards];
    newCards[idx].input = e.target.value;
    this.setState({
      Cards: newCards
    });
  };

  validateInput = e => {
    if (e.target.value === "") {
      window.alert("input required");
    }
  };
  Delete = id => {
    this.setState({
      Cards: this.state.Cards.filter(card => card.id !== id)
    });
  };

  CreateCard = (type, input) =>
    this.setState({
      Cards: [
        ...this.state.Cards,
        {
          id: this.state.id,
          type: type,
          input: input
        }
      ],
      id: this.state.id + 1
    });

  MoveLeft = (id, idx) => {
    let newCards = [...this.state.Cards];
    for (let card of newCards) {
      if (card.id === id && card.type === "What went well") {
        card.type = "Action items";
      } else if (card.id === id && card.type === "Start doing") {
        card.type = "What can be improved";
      } else if (card.id === id && card.type === "What can be improved") {
        card.type = "What went well";
      } else if (card.id === id && card.type === "Action items") {
        card.type = "Start doing";
      }
    }
    newCards.push(newCards[idx]);
    newCards.splice(idx, 1);
    this.setState({
      Cards: newCards
    });
  };

  MoveRight = (id, idx) => {
    let newCards = [...this.state.Cards];
    for (let card of newCards) {
      if (card.id === id && card.type === "What went well") {
        card.type = "What can be improved";
      } else if (card.id === id && card.type === "What can be improved") {
        card.type = "Start doing";
      } else if (card.id === id && card.type === "Start doing") {
        card.type = "Action items";
      } else if (card.id === id && card.type === "Action items") {
        card.type = "What went well";
      }
    }
    newCards.push(newCards[idx]);
    newCards.splice(idx, 1);
    this.setState({
      Cards: newCards
    });
  };

  render() {
    return (
      <div className="App">
        <br />
        <h2>Retro Wall</h2>
        <br />
        <div className="text-center">
          <div className={"row"}>
            <Category cards={this.state.Cards.filter((card)=>card.type === "What went well")} 
              MoveLeft={this.MoveLeft} MoveRight={this.MoveRight} userInput={this.userInput}
              Delete={this.Delete}
              categoryLabel={"What went well"}
              categoryColor={"wentWell"}
              onClick={() => this.CreateCard("What went well", "")} />
            <Category cards={this.state.Cards.filter((card)=>card.type === "What can be improved")} 
              MoveLeft={this.MoveLeft} MoveRight={this.MoveRight} userInput={this.userInput}
              Delete={this.Delete}
              categoryLabel={"What can be improved"}
              categoryColor={"toImprove"}
              onClick={() => this.CreateCard("What can be improved", "")} />
            <Category cards={this.state.Cards.filter((card)=>card.type === "Start doing")} 
              MoveLeft={this.MoveLeft} MoveRight={this.MoveRight} userInput={this.userInput}
              Delete={this.Delete}
              categoryLabel={"Start doing"}
              categoryColor={"startDoing"}
              onClick={() => this.CreateCard("Start doing", "")} />
            <Category cards={this.state.Cards.filter((card)=>card.type === "Action items")} 
              MoveLeft={this.MoveLeft} MoveRight={this.MoveRight} userInput={this.userInput}
              Delete={this.Delete}
              categoryLabel={"Action items"}
              categoryColor={"actionItems"}
              onClick={() => this.CreateCard("Action items", "")} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
