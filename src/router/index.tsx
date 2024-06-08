import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage, SearchPage } from '@/pages';

import { Pages } from '@/constants/pages';

const router = createBrowserRouter([
  {
    path: Pages.HOME,
    element: <HomePage />,
  },
  {
    path: Pages.SEARCH,
    element: <SearchPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
