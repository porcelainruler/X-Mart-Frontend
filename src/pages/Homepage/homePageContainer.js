import React, { Component, Fragment } from "react";
import EventCarousal from "./components/eventCarousal";
import Advertisement from "./components/advertisement";
import Tester from "./components/test";

class HomePage extends Component {
  constructor(props) {
    super(props);
    // this.incrementAge = this.incrementAge.bind(this);
  }

  render() {
    return (
      [
        <Tester />,
        <Advertisement />,
        <EventCarousal />,
        <h1>Something</h1>
      ]
    );
  }
}

export default HomePage;
