import BaseService from 'modules/Shared/services/BaseService';
import { ROUTES } from 'modules/Shared/constants/routes';
import { IRegisterForm } from 'modules/Register/interfaces/IRegisterForm';
import { ILoginForm } from 'modules/Login/interfaces/ILoginForm';

const AuthService = () => {
  const baseService = BaseService(ROUTES.AUTH.BASE);
  const endpoints = {
    ...baseService,
    register: (data: IRegisterForm) =>
      baseService.postDynamic<IRegisterForm>('/register', data),
    login: (data: ILoginForm) => baseService.postDynamic('/login', data),
  };
  return endpoints;
};

export default AuthService();
