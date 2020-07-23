import axios from 'axios';
const config = require('../config.json');

const api = axios.create({
    baseURL: config.baseUrl,
}) 

export default api; 