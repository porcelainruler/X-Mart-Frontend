import React, { Component, Fragment } from "react";
import eventData from "../../../constants/events";
import advertisement from "../../../public/images/Events/advertisement.jpg";

class Advertisement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(eventData);
    return (
        <img src={advertisement} style={{ height: "200px", width: "90%", marginLeft: "auto", marginRight: "auto", marginBottom: "20px"}}></img>
    );
  }
}

export default Advertisement;
