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
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <Cards/>
<<<<<<< HEAD
  
=======
 ankitBranch
      <Contact />
=======
  
 main
>>>>>>> a31a1decdff8ff69ab0de56a39b0ca6bd8b1a8ef
    </div>
);

export default Home;
