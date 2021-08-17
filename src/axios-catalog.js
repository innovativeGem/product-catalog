import axios from 'axios';

const catalogInstance = axios.create({
    baseURL: 'https://www.adorebeauty.com.au/api/ecommerce/catalog'
});

catalogInstance.defaults.headers.common['Content-Type'] = 'application/json';

export default catalogInstance;