import React, { Component } from "react";
import Card from "./Card/Card";

export default class Category extends Component {
    render() {
      console.log("Props", this.props);
        return (
            <div className={"col-sm-12 col-lg-3" }>
              <div>
                <h4>{this.props.categoryLabel}</h4>
                <button
                  type="button"
                  className="addButton"
                  onClick={this.props.onClick}
                >
                  +
                </button>
              </div>
              {this.props.cards.map((card, idx) => {
                if (card.type === this.props.categoryLabel) {
                  return (
                    <Card
                      key={this.props.categoryLabel + idx}
                      idx={idx}
                      cardId={card.id}
                      value={card.input}
                      userInput={this.props.userInput}
                      MoveLeft={this.props.MoveLeft}
                      Delete={this.props.Delete}
                      MoveRight={this.props.MoveRight}
                      color={this.props.categoryColor}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
        );
    }
}
