import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";


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
          <CardImg
            alt="..."
            src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
            top
          ></CardImg>
          <CardBody>
            <CardTitle>Keep Coasting</CardTitle>
          </CardBody>
        </Card>
      </div>
        </div>
    )
}

export default Cards
