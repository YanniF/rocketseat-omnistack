import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back-end-omni-stack.herokuapp.com'
});

export default api;