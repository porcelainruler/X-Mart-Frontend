import React, { Component, Fragment } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import eventData from "../../../constants/events";

function CarousalItem(props) {
  return (
    <Paper style={{ backgroundImage: props.item.imagePath }}>
      <h2>{props.item.displayName}</h2>
      <p>{props.item.name}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
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
    // this.incrementAge = this.incrementAge.bind(this);
  }

  render() {
    console.log(eventData);
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
