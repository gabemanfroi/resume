export interface ISkillCategory {
  id: number;
  name: string;
}

export interface ISkill {
  id: number;
  name: string;
  proficiency: number;
  category: ISkillCategory;
}
