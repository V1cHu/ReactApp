export const homeActionTypes = {
    GET_AVENGERS: "GET_AVENGERS",
    ADD_AVENGER: "ADD_AVENGER",
    DELETE_AVENGER: "DELETE_AVENGER",
    EDIT_AVENGER: "EDIT_AVENGER",
}

export const getAvengers = () => ({ type: homeActionTypes.GET_AVENGERS, payload: {} });
export const addAvenger = (avenger) => ({ type: homeActionTypes.ADD_AVENGER, payload: avenger });
export const deleteAvenger = (id) => ({ type: homeActionTypes.DELETE_AVENGER, payload: id });
export const editAvenger = (avenger) => ({ type: homeActionTypes.EDIT_AVENGER, payload: avenger });