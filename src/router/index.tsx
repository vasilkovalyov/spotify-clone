import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage, SearchPage } from '@/pages';

import { Pages } from '@/constants/pages';
import { Layout } from '@/components';

const router = createBrowserRouter([
  {
    path: Pages.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: Pages.SEARCH,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
