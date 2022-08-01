import AxiosClient from 'modules/Shared/util/AxiosClient';


export const BaseService = <T>(baseEndpoint: string) => {
  const axios = AxiosClient;
  return {
    get: <T>(url = '') => axios.get<T>(`${baseEndpoint}${url}`),
    post: <T>(url?: string, data?: T) =>
      axios.post(`${baseEndpoint}${url || ''}`, data),
    delete: (url?: string) =>
      axios.post(`${baseEndpoint}${url || ''}`),
  };
};
