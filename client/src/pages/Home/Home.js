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
      <Contact />
=======
  
>>>>>>> 92c5c931fd8b0dcbf1a78d4dfa705a94bdae39ff
    </div>
);

export default Home;
