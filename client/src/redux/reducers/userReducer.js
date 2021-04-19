import * as actions from "../constants/userConstants";
const USER_INITIAL_STATE = {
    user: {},
}


export const userReducer = (state = USER_INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.ADD_USER:
            const user = action.payload;
            const userExist = state.user.find((u) => u.id === user.id)
            return {}
        default:
            return state;
    }
}