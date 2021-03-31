import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const signIn = (loginData) => API.post('/user/signin', loginData);
export const signUp = (formData) => API.post('/user/signup', formData);
