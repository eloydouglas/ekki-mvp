import axios from 'axios';

const config = () => {
    axios.defaults.baseURL = 'http://localhost:4266';
}

export default config;