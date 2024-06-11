export type CategoriesType = {
  items: CategoryType[];
  total: number;
  offset: number;
  limit: number;
};

export type CategoryType = {
  href: string;
  id: string;
  icons: {
    width: number;
    height: number;
    url: string;
  }[];
  name: string;
};
