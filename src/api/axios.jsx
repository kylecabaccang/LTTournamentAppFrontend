import axios from 'axios';

// Set the base URL for your API
axios.defaults.baseURL = 'http://127.0.0.1:8000'; // Update this

// Function to get the JWT token from local storage
function getToken() {
  return localStorage.getItem('user');
}

// Create an Axios instance with defaults
const instance = axios.create();

// Add an interceptor to check for the token and reject requests if it's missing
instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    } else {
      return Promise.reject('No JWT token available in local storage');
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.defaults.headers.common['Content-Type'] = 'application/json';

export default instance;