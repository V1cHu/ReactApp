import { avengers } from '../api/avengers';
import { homeActionTypes } from '../actions/homeActions';

const initialState = {
    avengers: avengers
}

export const homeReducer = (state = initialState, action) => {

    switch (action.type) {
        case homeActionTypes.GET_AVENGERS: {
            return state;
        }
        case homeActionTypes.ADD_AVENGER: {
            return { ...state, avengers: state.avengers.concat(action.payload) }
        }
        case homeActionTypes.EDIT_AVENGER: {
            return {
                ...state, avengers: state.avengers.map(avenger =>
                    avenger.id == action.payload.id ?
                        ({ ...avenger, name: action.payload.name, avengername: action.payload.avengername }) : avenger)
            }

        }
        case homeActionTypes.DELETE_AVENGER: {
            return { ...state, avengers: state.avengers.filter(avenger => avenger.id != action.payload) };
        }
        default: return state;
    }



}