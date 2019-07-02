import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
    this.updateNum1 = this.updateNum1.bind(this);
    this.updateNum2 = this.updateNum2.bind(this);
  }
  updateNum1(value) {
    this.setState({ number1: parseInt(value, 10) });
  }
  updateNum2(value) {
    this.setState({ number2: parseInt(value, 10) });
  }
  calcSum(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={event => this.updateNum1(event.target.value)}
        />
        <input
          className="inputLine"
          onChange={event => this.updateNum2(event.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.calcSum(this.state.number1, this.state.number2);
          }}
        >
          Add
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
