import axios from 'axios';
import { camelizeKeys } from 'humps';

class HttpClient {
  constructor() {
    this.axiosInstance = axios.create({
        baseURL: ' https://showcase-me-backend.herokuapp.com/',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
    this.axiosInstance.interceptors.response.use(
      response => camelizeKeys(response.data),
      error => Promise.reject(error),
    );
  }
}

export default new HttpClient();