import React, { useState, useEffect } from 'react';
import Api from "../../utils/API";
import LoginForm from "../../components/Form/login";
import "./dashboard.css";
import Cars from "../../components/Cars/cars"


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

console.log(user===null);
  return (

    <div className="form">
      {!user ? <Cars Cars={car} /> : <LoginForm/>}
    </div>

  )
}

export default Dashboard

