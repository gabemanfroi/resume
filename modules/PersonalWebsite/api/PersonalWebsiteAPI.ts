import { BaseAPI } from 'modules/Shared/api';

const PersonalWebsiteAPI = () => {
  return BaseAPI('/websites');
};

export default PersonalWebsiteAPI;
