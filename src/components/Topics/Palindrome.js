import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({ userInput: value });
  }
  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={event => this.handleChange(event.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.checkPal(this.state.userInput)}
        >
          Check
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }

  checkPal(userInput) {
    let string = userInput.toLowerCase().replace(/[\W_]/g, "");
    let reverseStr = string
      .split("")
      .reverse()
      .join("");
    if (string === reverseStr) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }
}

export default Palindrome;
