import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import Gif from "../Gif/Gif"

function Cards() {
    return (
        <div>
             <div className=" card-deck">
        <Card>
          <Gif images="wrench.gif"/>
          <CardBody>
            <CardTitle>Stay Tuned</CardTitle>
          </CardBody>
        </Card>
        <Card>
         <Gif images="wheel.gif"/>
          <CardBody>
            <CardTitle>Steer Clear</CardTitle>
          </CardBody>
        </Card>
        <Card>
          {/* <CardImg
            alt="..."
             src="../images/girl.gif"
            top
       
          >
           
          </CardImg > */}
     
          <CardBody>

            <CardTitle><h1>Keep Coasting</h1></CardTitle>
            <Gif images="girl.gif"/>
          </CardBody>
        </Card>
      </div>
        </div>
    )
}

export default Cards;
