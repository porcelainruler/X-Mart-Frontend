import React, { Component, Fragment } from "react";
import EventCarousal from "./components/eventCarousal";

class HomePage extends Component {
  constructor(props) {
    super(props);
    // this.incrementAge = this.incrementAge.bind(this);
  }

  render() {
    return (
      [
        <EventCarousal />
      ]
    );
  }
}

export default HomePage;
