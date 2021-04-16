import React from "react";
import {Jumbotron,Button} from "reactstrap";
import "../Home/home.css"
import Contact from "../Contact/Contact"
import Cards from "../../components/cards";
import Gif from "../../components/Gif/Gif"
const Home = () => (
  <div >
      <Jumbotron id="jumbo" >
        <h1 className="display-3">Road Wise </h1>
        <p className="lead">Your one stop shop for car maintenance.</p>

        <p className="lead">
          {/* <Button color="primary">Learn More</Button> */}
        </p>
      </Jumbotron>
      <Cards/>
      <Contact />
    </div>
);

export default Home;
