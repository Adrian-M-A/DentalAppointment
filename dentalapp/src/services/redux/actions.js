import axios from 'axios';
import backURL from '../../config/api.js';
import store from './store.js';
import { LOGIN } from './types/user.js';


const login = async(credentials) => {
    const res = await axios.post(backURL + "user/login", credentials);
    store.dispatch({
        type: LOGIN,
        payload: res.data.user
    })
    localStorage.setItem('authToken', res.data.token)
    return res;
}

export default login;