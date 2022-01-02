import React, { Component, Fragment } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import eventData from "../../../constants/events";

function CarousalItem(props) {
  return (
    <>
      <Paper style={{ backgroundImage: `url(${props.item.imagePath})`, height: "200px", width: "90%", marginLeft: "auto", marginRight: "auto" }}>
      </Paper>
      <h2>{props.item.displayName}</h2>
    </>
  );
}

// const tempData = [
//   {
//     name: "Random Name #1",
//     description: "Probably the most random thing you have ever seen!",
//   },
//   {
//     name: "Random Name #2",
//     description: "Hello World!",
//   },
// ];

class EventCarousal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel>
        {eventData.events.map((event, i) => (
          <CarousalItem key={i} item={event} />
        ))}
      </Carousel>
    );
  }
}

export default EventCarousal;
