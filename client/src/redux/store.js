import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

// car reducer 

// user reducer

const reducer = combineReducers({
    // input reducers imported above from where you need them ?
})

const middleware = [thunk];

const INITIAL_STATE = {
    // fill with state from reducer 
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);