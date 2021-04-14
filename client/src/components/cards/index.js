import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import Gif from "../Gif/Gif";
import {Section}from "./cards.styles"

function Cards() {
    return (
      <Section>
          <Gif Title={"Keep Coasting."}images="wrench.gif"/>
         <Gif Title={"Stay Tuned."}images="wheel.gif"/>
          <Gif Title={"Steer Clear."}images="girl.gif"/>
      </Section>
    )
}

export default Cards;
