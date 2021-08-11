import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://whats-mern-stack-clone.herokuapp.com',
});

export default instance;