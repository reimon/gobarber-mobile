import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.7.64:3333',
});

export default api;
