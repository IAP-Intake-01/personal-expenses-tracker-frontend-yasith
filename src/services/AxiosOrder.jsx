import axios from "axios";
const token=localStorage.getItem('login')
const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {Authorization:`Bearer ${token}`},
    withCredentials: true
});

export default instance;


