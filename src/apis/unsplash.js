import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 292e76bd5fa8a0e86960b6f506636020c2ef7ce6423b2b663e874ded410a28bb'
    }
});