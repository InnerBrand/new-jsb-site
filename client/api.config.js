import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://jsb.com/api'
      : 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
