import axios, { AxiosInstance } from 'axios';

const AxiosClient = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8001/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
  return axiosInstance;
};

export default AxiosClient();
