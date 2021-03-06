import { LOGIN, LOGOUT, STORE_EMAIL } from "./types/user";
import { APPOINTMENTSAVAILABLE, APPOINTMENTSELECTED, APPOINTMENTSFIXED } from './types/appointment.js';

const initialState = {
    user: {},
    appointmentsAvailable: [],
    appointmentSelected:  {},
    appointmentsFixed: [],
    storeEmail: {}
}

function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                user:action.payload
            }
        case LOGOUT:
            return {
                ...state,
                user: {}
            }
        case APPOINTMENTSAVAILABLE:
            return {
                ...state,
                appointmentsAvailable: action.payload
            }
        case APPOINTMENTSELECTED:
            return {
                ...state,
                appointmentSelected: action.payload
            }
        case APPOINTMENTSFIXED:
            return {
                ...state,
                appointmentsFixed: action.payload
            }
        case STORE_EMAIL:
            return {
                ...state,
                storeEmail: action.payload
            }
        default:
            return state;
    }
}

export default reducer;