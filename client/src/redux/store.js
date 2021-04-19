import { createStore, combineReducers, applyMiddleware } from 'redux';
import { CarsReducer } from "./reducers/carReducer";
import { userReducer } from "./reducers/userReducer";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
const INITIAL_STATE = {
        // fill with state from reducer 
    }
    // car reducer 
    // user reducer

const reducer = combineReducers({
    // input reducers imported above from where you need them ?
    CarsReducer,
    userReducer
})

const middleware = [thunk];



export const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);