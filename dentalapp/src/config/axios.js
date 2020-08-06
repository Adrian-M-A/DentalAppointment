import axios from 'axios';
import backURL from './api.js';

axios.defaults.baseURL = backURL;

axios.interceptors.request.use(function(config) {
    const token = localStorage.getItem('authToken');
    const newConfig = {
        ...config
    }
    if (token) {
        newConfig.headers = {
            ...newConfig.headers,
            authorization: 'Bearer ' + token
        }
    }
    return newConfig;
}, function (error) {
    return Promise.reject(error);
});