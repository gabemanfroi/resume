import AxiosClient from 'modules/Shared/util/AxiosClient';
import { BaseService } from 'modules/Shared/services';
import { IResume } from 'modules/Resume/interfaces/IResume';
import { ROUTES } from 'modules/Shared/constants/routes';

const ResumeService = () => {
  const endpoints = {
    getByUsername: (username: string) =>
      AxiosClient.get<IResume>(`${ROUTES.RESUME.BASE}/${username}`),
  };

  return {
    ...BaseService<IResume>(ROUTES.RESUME.BASE),
    ...endpoints,
  };
};

export default ResumeService();
