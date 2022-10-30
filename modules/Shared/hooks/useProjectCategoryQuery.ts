import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { ProjectCategoryService } from 'modules/Shared/services';
import { IProjectCategory } from 'modules/Resume/interfaces/IProject';

const useProjectCategoryQuery = () => {
  const {
    isLoading: getAllProjectCategoriesIsLoading,
    data: getAllProjectCategoriesData,
  } = useQuery([QUERIES.PROJECT_CATEGORY.FIND_ALL], () =>
    ProjectCategoryService.get<IProjectCategory[]>(),
  );

  return { getAllProjectCategoriesData, getAllProjectCategoriesIsLoading };
};

export default useProjectCategoryQuery;
