import { LOGIN, LOGOUT } from "./types/user";

const initialState = {
    user: {}
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
        
        default:
            return state;
    }
    
}

export default reducer;