import axios from 'axios';

const YOU_TUBE_KEY = 'AIzaSyBx0ZkcFAJdpMufrQNVjZrZtwKW_9x97sQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: YOU_TUBE_KEY
    }
});