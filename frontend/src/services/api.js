import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000, // 10 segundos
});

export default api;