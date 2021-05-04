import axios from 'axios';
import config from '../config.json';

const api = axios.create({
    baseURL: config.production ? config.productionDatabase : config.localDatabase,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;