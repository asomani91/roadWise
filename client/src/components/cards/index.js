import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import Gif from "../Gif/Gif";
import {Section}from "./cards.styles"

function Cards() {
    return (
      <Section>
          <Gif Title={"Stay Tuned"}images="wrench.gif"/>
         <Gif Title={"Steer Clear"}images="wheel.gif"/>
          <Gif Title={"Keep Coasting"}images="girl.gif"/>
      </Section>
    )
}

export default Cards;
