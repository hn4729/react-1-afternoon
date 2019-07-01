import React, { Component } from "react";
import "./index.css";

import TopicBroswer from "./components/TopicBrowser/TopicBrowser";
import EvenAndOdd from "./components/Topics/EvenAndOdd";
import FilterObject from "./components/Topics/FilterObject";
import FilterString from "./components/Topics/FilterString";
import Palindrome from "./components/Topics/Palindrome";
import Sum from "./components/Topics/Sum";
import DisemVoweler from "./components/Topics/DisemVoweler";

class App extends Component {
  render() {
    return (
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
        <DisemVoweler />
      </div>
    );
  }
}

export default App;
