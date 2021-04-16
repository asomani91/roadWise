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
    Api.checklogin()
    .then((data)=>{
      console.log("data",data);
      if(data.data === "Not logged in yet!" ) {
        console.log("redirect to login ");
        window.location.replace("/login")
      } else{
        setUser(data.data)
        getAllCars();
      }

    })
    

  }, []);

console.log(user);
  return (

    <div className="form">
   
      {user ?  <Cars Cars={car} /> : <LoginForm/>}
    </div>

  )
}

export default Dashboard

