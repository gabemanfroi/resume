import HttpClient from '../util/HttpClient';

export default class BaseAPI {
  constructor(baseEndpoint) {
    this.baseEndpoint = baseEndpoint;
  }

  get() {
    return HttpClient.axiosInstance.get(this.baseEndpoint);
  }

  post(data) {
    return HttpClient.axiosInstance.post(this.baseEndpoint, data);
  }

  put(data) {
    return HttpClient.axiosInstance.put(`${this.baseEndpoint}/${data.id}`, data);
  }

  delete(id) {
    return HttpClient.axiosInstance.delete(`${this.baseEndpoint}/${id}`);
  }
}