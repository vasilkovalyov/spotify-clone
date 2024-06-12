import { ImageType } from './image';

export type CategoriesType = {
  items: CategoryType[];
  total: number;
  offset: number;
  limit: number;
};

export type CategoryType = {
  href: string;
  id: string;
  icons: ImageType[];
  name: string;
};
