import { ROUTES } from 'modules/Shared/constants/routes';

import { IUser } from 'modules/Shared/interfaces/IUser';
import { BaseService } from 'modules/Shared/services';

const UserService = () => {
  return {
    ...BaseService<IUser>(ROUTES.USER.BASE),
  };
};

export default UserService();
