import { BaseService } from 'modules/Shared/services/index';
import { IProjectCategory } from 'modules/Resume/interfaces/IProject';
import { ROUTES } from 'modules/Shared/constants/routes';

const ProjectCategoryService = () => {
  return {
    ...BaseService<IProjectCategory>(ROUTES.PROJECT_CATEGORY.BASE),
  };
};

export default ProjectCategoryService();
