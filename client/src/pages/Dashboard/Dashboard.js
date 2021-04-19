import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Api from "../../utils/API";
import LoginForm from "../../components/Form/Login";
import "./dashboard.css";
import { addCar } from "../../redux/actions/carActions";

import Cars from "../../components/Cars/cars";

function Dashboard() {
  const [user, setUser] = useState({});
  const [car, setCars] = useState([]);

  function getAllCars() {
    console.log("mym", car);

    Api.allCars()
      .then(({ data }) => {
        setCars(data);
      })
      .catch((err) => console.log(err));
  }
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  const onAddCar = (car) => {
    dispatch(addCar(car));
  };

  useEffect(() => {
    Api.checklogin().then((data) => {
      console.log("data", data);
      getAllCars();

      if (data.data === "Not logged in yet!") {
        console.log("redirect to login ");
        // window.location.replace("/login");
      } else {
        setUser(data.data);
      }
    });
  }, []);

  console.log("user", user);
  console.log("cars", cars);
  return (
    <div className="form">
      {Object.keys(user) ? (
        <Cars Cars={car} onAddCar={onAddCar} />
      ) : (
        <LoginForm />
      )}
      {/* <Cars Cars={car} onAddCar={onAddCar} /> */}
    </div>
  );
}

export default Dashboard;
