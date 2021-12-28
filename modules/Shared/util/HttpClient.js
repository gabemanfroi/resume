import axios from 'axios';
import { camelizeKeys } from 'humps';

class HttpClient {
  constructor() {
    this.axiosInstance = axios.create({
        baseURL: process.env.BASE_URL,
        headers: {
          'Content-Type': 'application/json',
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