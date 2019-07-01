import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        {
          name: "Spot",
          sound: "woof",
          age: 2
        },
        {
          name: "Skeet",
          fly: "yes",
          age: 5
        },
        {
          name: "Fin",
          animal: "turtle",
          age: 10
        }
      ],
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
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={event => this.handleChange(event.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filter(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
  filter(userInput) {
    let filtered = this.state.unFilteredArray.filter(object => {
      for (let prop in object) {
        if (prop === userInput) {
          return object;
        }
      }
    });
    this.setState({ filteredArray: filtered });
  }
}

export default FilterObject;
