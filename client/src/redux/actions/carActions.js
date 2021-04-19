import * as actionTypes from "../constants/carConstants";


export const addCar = (car) => ({
    type: actionTypes.ADD_CAR,
    payload: car,
});

export const setCars = (cars) => ({
    type: actionTypes.SET_CARS,
    payload: cars,
});

// import { ADD_CARS, setCars, SET_CARS } from "./actions"
// import axios from "axios";

// const addCar = car => ({
//     type: ADD_TODO_SUCCESS,
//     payload: {
//         ...todo
//     }
// });

// export const saveCars = () => async(dispatch, getState) => {
//     const cars = getState().cars;
//     const headers = {
//         'Accept': 'application/json',
//         'Content-type': 'application/json'
//     }
//     const body = {

//     }
//     await axios.post("http://localhost:4000/cars", {
//         body
//     }).then(res => {
//         dispatch(addTodoSuccess(res.data));
//     })
//     alert("Success")
// }