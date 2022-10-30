import { BaseService } from 'modules/Shared/services/index';
import { ROUTES } from 'modules/Shared/constants/routes';
import { IProject } from 'modules/Resume/interfaces/IProject';

const ProjectService = () => {
  return {
    ...BaseService<IProject>(ROUTES.PROJECT.BASE),
  };
};
export default ProjectService();
