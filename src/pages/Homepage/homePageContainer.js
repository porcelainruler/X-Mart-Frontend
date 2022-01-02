import React, { Component, Fragment } from "react";
import EventCarousal from "./components/eventCarousal";
import Advertisement from "./components/advertisement";
import Tester from "./components/test";
import SettingModal from "./components/setting";

class HomePage extends Component {
  constructor(props) {
    super(props);
    // this.incrementAge = this.incrementAge.bind(this);
  }

  render() {
    return (
      [
        <Tester />,
        <SettingModal />,
        <Advertisement />,
        <EventCarousal />,
        <h1>Something</h1>
      ]
    );
  }
}

export default HomePage;
