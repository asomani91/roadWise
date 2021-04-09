import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import Gif from "../Gif/Gif"

function Cards() {
    return (
        <div>
             <div className=" card-deck">
        <Card>
          <CardImg
            alt="..."
            src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
            
          ></CardImg>
          <CardBody>
            <CardTitle>Stay Tuned</CardTitle>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="..."
            src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
            top
          ></CardImg>
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
<<<<<<< HEAD
            <CardTitle>Keep Coasting</CardTitle>
=======
            <CardTitle><h1>Keep Coasting</h1></CardTitle>
            
            <Gif/>
>>>>>>> 92c5c931fd8b0dcbf1a78d4dfa705a94bdae39ff
          </CardBody>
        </Card>
      </div>
        </div>
    )
}

export default Cards;
