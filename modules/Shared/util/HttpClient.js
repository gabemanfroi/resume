import axios from 'axios';
import { camelizeKeys } from 'humps';

class HttpClient {
  constructor() {
    this.axiosInstance = axios.create({
        baseURL: 'http://localhost:8000',
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