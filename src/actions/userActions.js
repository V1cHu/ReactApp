export const userActionTypes = {
    AUTHENTICATE_USER: 'AUTHENTICATE_USER',
    LOGOUT_USER: 'LOGOUT_USER'
}

export const authenticateUser = (user) => ({ type: userActionTypes.AUTHENTICATE_USER, payload: user })
export const logoutUser = () => ({ type: userActionTypes.LOGOUT_USER })