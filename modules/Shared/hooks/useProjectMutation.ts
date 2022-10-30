import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IProject } from 'modules/Resume/interfaces/IProject';
import { ProjectService } from 'modules/Shared/services';
import { QUERIES } from 'modules/Shared/constants/queries';

const useProjectMutation = () => {
  const client = useQueryClient();

  const {
    mutateAsync: createProjectMutateAsync,
    isLoading: createProjectIsLoading,
  } = useMutation(
    (project: IProject | FormData) => {
      return ProjectService.post('', project);
    },
    {
      async onSuccess() {
        await client.invalidateQueries([QUERIES.RESUME.FIND_ONE]);
      },
    },
  );

  return {
    createProjectMutateAsync,
    createProjectIsLoading,
  };
};

export default useProjectMutation;
