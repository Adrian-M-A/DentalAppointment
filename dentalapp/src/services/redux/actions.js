import axios from 'axios';
import backURL from '../../config/api.js';
import store from './store.js';
import { LOGIN, APPOINTMENTSAVAILABLE } from './types/user.js';


export const login = async(credentials) => {
    const res = await axios.post(backURL + 'user/login', credentials);
    store.dispatch({
        type: LOGIN,
        payload: res.data.user
    })
    localStorage.setItem('authToken', res.data.token)
    return res;
}

export const appointmentsAvailable = async() =>{
    const res = await axios.get(backURL + 'appointment/');
    store.dispatch({
        type: APPOINTMENTSAVAILABLE,
        payload: res.data
    })
    return res;
}