import { userActionTypes } from '../actions/userActions';

const initialState = {
    user: {},
    isAuthenticated: false
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case userActionTypes.AUTHENTICATE_USER: {
            let user = action.payload;

            if (user.username == user.password) {
                return { ...state, user: user, isAuthenticated: true }
            }
            return { ...state }
        }
        case userActionTypes.LOGOUT_USER: {
            return {...state,...initialState};
        }
        default: return state;
    }
}