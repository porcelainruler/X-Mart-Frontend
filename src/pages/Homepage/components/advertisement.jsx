import React, { Component, Fragment } from "react";
import eventData from "../../../constants/events";
import advertisement from "../../../public/images/Events/advertisement.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class Advertisement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(eventData);
    return (
      <div style={{width: "100%"}}>
        <LazyLoadImage
          alt={"Lazy Loading Advertisement"}
          effect="blur"
          src={advertisement}
          style={{ height: "200px", width: "90vw", marginLeft: "auto", marginRight: "auto", marginBottom: "20px" }}
        />
      </div>
      // <img src={advertisement} style={{ height: "200px", width: "90%", marginLeft: "auto", marginRight: "auto", marginBottom: "20px"}}></img>
    );
  }
}

export default Advertisement;
