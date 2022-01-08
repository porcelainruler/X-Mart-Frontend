import React, { Component, Fragment } from "react";
import EventCarousal from "./components/eventCarousal";
import Advertisement from "./components/advertisement";
import Tester from "./components/test";

const HomePage = () => {
  return [<Tester />, <Advertisement />, <EventCarousal />, <h1>Something</h1>];
};


export default HomePage;
