export interface IProjectCategory {
  id: string;
  name: string;
}

export interface IProject {
  id?: number;
  title: string;
  url: string;
  imageUrl: string;
  categoryId: number;
}
