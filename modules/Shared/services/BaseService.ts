import AxiosClient from 'modules/Shared/util/AxiosClient';

const BaseService = <T>(baseEndpoint: string) => {
  const axios = AxiosClient;
  return {
    get: (url = '') => axios.get<T>(`${baseEndpoint}${url}`),
    post: (url?: string, data?: T) =>
      axios.post(`${baseEndpoint}${url || ''}`, data),
    postDynamic: <dT>(url?: string, data?: dT) =>
      axios.post(`${baseEndpoint}${url || ''}`, data),
    delete: (url?: string) => axios.post(`${baseEndpoint}${url || ''}`),
    patch: (url?: string, data?: T) =>
      axios.patch(`${baseEndpoint}${url || ''}`, data),
  };
};
export default BaseService;
