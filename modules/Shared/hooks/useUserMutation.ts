import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IUser } from 'modules/Shared/interfaces/IUser';
import { UserService } from 'modules/Shared/services';
import { QUERIES } from 'modules/Shared/constants/queries';

const useUserMutation = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateUserMutate, isLoading: updateUserIsLoading } =
    useMutation(
      (user: IUser) => {
        return UserService.patch(`/${user.id}`, {
          ...user,
        });
      },
      {
        async onSuccess() {
          await queryClient.invalidateQueries([QUERIES.RESUME.FIND_ONE]);
        },
      },
    );

  return { updateUserMutate, updateUserIsLoading };
};
export default useUserMutation;
