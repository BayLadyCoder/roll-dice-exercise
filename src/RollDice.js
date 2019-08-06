import React, { Component } from "react";
import "./RollDice.css";
import Die from "./Die";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { dice1: 1, dice2: 1, rolling: false };
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    let roll1 = Math.floor(Math.random() * 6 + 1);
    let roll2 = Math.floor(Math.random() * 6 + 1);
    console.log(roll1, roll2);
    this.setState({ dice1: roll1, dice2: roll2, rolling: true });

    //  wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="Dies">
          <Die dice={this.state.dice1} rolling={this.state.rolling} />
          <Die dice={this.state.dice2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.rollDice} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling" : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
