import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: ["racecar", "car", "rice", "icy", "spicy", "spice"],
      userInput: "",
      filteredArray: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({ userInput: value });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Orginal: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={event => {
            this.handleChange(event.target.value);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filter(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
  filter(userInput) {
    let filtered = this.state.unFilteredArray.filter(element =>
      element.includes(userInput)
    );
    this.setState({ filteredArray: filtered });
  }
}

export default FilterString;
