import * as actionTypes from "../constants/carConstants"
import axios from "axios";
const initialState = {
    cars: []
}

export const CarsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CAR:
            {
                return {...state, cars: [...state.cars, action.payload] }
            }
        case actionTypes.EDIT_CAR:
            {
                return {...state, cars: action.payload }
            }
        default:
            return state
    }
}