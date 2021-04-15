import React, { useState, useEffect } from 'react';
import Api from "../../utils/API";
import LoginForm from "../../components/Form/login";
import "./dashboard.css";
import Cars from "../../components/Cars/cars"
function Dashboard() {
  const [user, setUser] = useState(false);
  const [car, setCars] = useState([]);



  useEffect(() => {
    HandleAllCars();
    console.log(car);
  }, []);

  function HandleAllCars() {

    Api.allCars()
      .then(({ data }) => {
        setCars(data);
        console.log(car);
      }).catch(err => console.log(err))
  }

  return (

    <div className="form">

      {
        (user ? <LoginForm /> :
          <Cars />)}
    </div>

  )
}

export default Dashboard

