import { LOGIN, LOGOUT, APPOINTMENTSAVAILABLE } from "./types/user";

const initialState = {
    user: {},
    appointmentsAvailable: []
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
        
        default:
            return state;
    }
    
}

export default reducer;