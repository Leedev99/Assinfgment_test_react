import axios from "axios";
import join from "url-join";
export const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

var apiURL = "https://610183924e50960017c29e8d.mockapi.io/";
axios.interceptors.request.use(
  (config) => {
     config.headers.genericKey = "Test1234";
    config.url = join(apiURL, config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const httpClient = axios;
