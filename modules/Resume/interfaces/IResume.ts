import { ISkill } from 'modules/Shared/interfaces/ISkill';
import { ICarouselItem } from 'modules/Resume/interfaces/ICarouselItem';
import { IWebsite } from 'modules/Resume/interfaces/IWebsite';
import { IUser } from 'modules/Shared/interfaces/IUser';
import { IProject } from 'modules/Resume/interfaces/IProject';

export interface IResume {
  skills: ISkill[],
  carouselItems: ICarouselItem[],
  websites: IWebsite[],
  user: IUser[],
  projects: IProject[]
}
