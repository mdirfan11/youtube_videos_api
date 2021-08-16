import axios from 'axios';

const YOU_TUBE_KEY = '******************************************************';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: YOU_TUBE_KEY
    }
});