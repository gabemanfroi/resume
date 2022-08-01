import AxiosClient from 'modules/Shared/util/AxiosClient';
import { BaseService } from 'modules/Shared/services/BaseService';
import { IResume } from 'modules/Resume/interfaces/IResume';


const ResumeService = () => {
  const endpoints = {
    getByUsername: (username: string) => AxiosClient.get<IResume>(`/resume/${username}`),
  };

  return {
    ...BaseService<IResume>('/resume'),
    ...endpoints,
  };
};

export default ResumeService;
