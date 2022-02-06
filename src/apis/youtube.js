import axios from 'axios';

const KEY = 'AIzaSyDcGK-GN1F6kd3W0d-8HxKNZf6GUv1ZgXY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});