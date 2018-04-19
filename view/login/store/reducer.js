import { SET_USER_LOGIN } from "./actionTypes";

const defaultStatus = {
    loginStatus: false
}

export default (state = defaultStatus, action) => {
    switch (action.type) {
        case SET_USER_LOGIN:
            return Object.assign({}, state, {loginStatus: action.loginStatus})            
        default:
            return state;
    }
}
