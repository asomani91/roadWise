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
<<<<<<< HEAD
=======
            <CardTitle><h1>Keep Coasting</h1></CardTitle>
            
            <Gif/>
>>>>>>> main
=======
 ankitBranch
>>>>>>> a8c48608b29d850bf67089275cce3d976edd3df6
            <CardTitle>Keep Coasting</CardTitle>

            <CardTitle><h1>Keep Coasting</h1></CardTitle>
            
            <Gif/>
<<<<<<< HEAD
=======
 main
<<<<<<< HEAD
>>>>>>> a8c48608b29d850bf67089275cce3d976edd3df6
=======
>>>>>>> a31a1decdff8ff69ab0de56a39b0ca6bd8b1a8ef
>>>>>>> main
          </CardBody>
        </Card>
      </div>
        </div>
    )
}

export default Cards;
