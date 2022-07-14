import axios, { AxiosInstance } from 'axios';
import { camelizeKeys } from 'humps';

const AxiosClient = ():AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
    }
  })
  axiosInstance.interceptors.response.use(response => camelizeKeys(response.data), error => Promise.reject(error))
  return axiosInstance
}

export default AxiosClient
