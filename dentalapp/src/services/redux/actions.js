import axios from 'axios';
import backURL from '../../config/api.js';
import store from './store.js';
import { LOGIN, STORE_EMAIL } from './types/user.js';
import { APPOINTMENTSAVAILABLE, APPOINTMENTSELECTED, APPOINTMENTSFIXED } from './types/appointment.js';

export const login = async(credentials) => {
    const res = await axios.post(backURL + 'user/login', credentials);
    store.dispatch({
        type: LOGIN,
        payload: res.data.user
    })
    localStorage.setItem('authToken', res.data.token)
    return res;
}

export const appointmentsAvailable = async() => {
    const res = await axios.get(backURL + 'appointment/available');
    store.dispatch({
        type: APPOINTMENTSAVAILABLE,
        payload: res.data
    })
    return res;
}

export const fixAppointment = async (id, appointment) => {
    const res = await axios.put(backURL + 'appointment/' + id, appointment);
    store.dispatch({
        type: APPOINTMENTSELECTED,
        payload: res.data
    })
    appointmentsAvailable();
    personalAppointment();
    return res;
}

export const personalAppointment = async() => {
    const res = await axios.get(backURL + 'appointment/my-appointment');
    store.dispatch({
        type: APPOINTMENTSFIXED,
        payload: res.data
    })

    return res;
}

export const cancelAppointment = async (id, appointment) => {
    const res = await axios.put(backURL + 'appointment/cancel/' + id, appointment);
    personalAppointment();
    appointmentsAvailable();
    return res;
}

export const storeEmail = (email) => {
    store.dispatch({
        type: STORE_EMAIL,
        payload: email
    })
}