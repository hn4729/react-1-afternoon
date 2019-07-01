import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Even and Odds </h4>
        <input
          className="inputLine"
          onChange={event => this.handleChange(event.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.EvenOrOdd(this.state.userInput);
          }}
        >
          {" "}
          Split{" "}
        </button>
        <span className="resultsBox">
          {" "}
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          {" "}
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
  handleChange(value) {
    this.setState({ userInput: value });
  }
  EvenOrOdd(userInput) {
    let evens = [];
    let odds = [];

    let inputArr = userInput.split(",");

    inputArr.forEach(element => {
      if (element % 2 === 0) {
        evens.push(Number(element));
      } else {
        odds.push(Number(element));
      }
    });
    this.setState({ evenArray: evens, oddArray: odds });
  }
}

export default EvenAndOdd;
