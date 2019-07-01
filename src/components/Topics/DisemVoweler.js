import React, { Component } from "react";

export default class DisemVoweler extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      noVowels: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({ userInput: value });
  }
  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4>DisemVoweler</h4>
        <input
          className="inputLine"
          onChange={event => this.handleChange(event.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.removeVowels(this.state.userInput)}
        >
          DisemVowel
        </button>
        <span className="resultsBox">New String: {this.state.noVowels}</span>
      </div>
    );
  }

  removeVowels(userInput) {
    let str = userInput.replace(/[aeiou]/gi, "");
    this.setState({ noVowels: str });
  }
}
