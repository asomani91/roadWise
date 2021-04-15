import React, { useState, useEffect } from 'react';
import Api from "../../utils/API";
import LoginForm from "../../components/Form/login";
import "./dashboard.css";
import Cars from "../../components/Cars/Cars"


function Dashboard() {
  const [user, setUser] = useState({});
  const [car, setCars] = useState([]);

  function getAllCars() {
    console.log(car)
    Api.allCars()
      .then(({ data }) => {
        setCars(data);
      }).catch(err => console.log(err))
  }

  useEffect(() => {
    getAllCars();
  }, []);


  return (

    <div className="form">
      {car ? <Cars Cars={car} /> : "no Cars Found "}
    </div>

  )
}

export default Dashboard

