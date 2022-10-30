import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { ResumeService } from 'modules/Resume/services';
import { IResume } from 'modules/Resume/interfaces/IResume';

const useResumeMutation = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateResumeMutate, isLoading: updateResumeIsLoading } =
    useMutation(
      (resume: IResume) => {
        return ResumeService.patch(`/${resume.user.username}`, {
          ...resume,
        });
      },
      {
        async onSuccess() {
          await queryClient.invalidateQueries([QUERIES.RESUME.FIND_ONE]);
        },
      },
    );

  return {
    updateResumeMutate,
    updateResumeIsLoading,
  };
};
export default useResumeMutation;
