import { LOGIN, LOGOUT, APPOINTMENTSAVAILABLE, APPOINTMENTSELECTED } from "./types/user";

const initialState = {
    user: {},
    appointmentsAvailable: [],
    appointmentSelected:  {}
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
        default:
            return state;
    }
    
}

export default reducer;