import AxiosClient from 'modules/Shared/util/AxiosClient';

const BaseAPI = (baseEndpoint: string) => {
  const axios = AxiosClient();
  return {
    get: () => {
      return axios.get(baseEndpoint);
    },
    getById: (id) => {
      return axios.get(`${baseEndpoint}/${id}`);
    },
    post: (data) => {
      return axios.post(baseEndpoint, data);
    },
    put: (data) => {
      return axios.put(baseEndpoint, data);
    },
    delete: (id) => {
      return axios.delete(`${baseEndpoint}/${id}`);
    },
  };
};

export default BaseAPI;
