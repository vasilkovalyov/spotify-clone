import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  HomePage,
  SearchPage,
  PageArtist,
  PageArtistsRelate,
  PageRecentlyPlayed,
  SearchSinglePage,
  PageTrack,
} from '@/pages';

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
      {
        path: ':value',
        element: <SearchSinglePage />,
      },
    ],
  },
  {
    path: `${Pages.ARTIST}/:id`,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PageArtist />,
      },
      {
        path: 'related',
        element: <PageArtistsRelate />,
      },
    ],
  },
  {
    path: Pages.RECENTLY_PLAYED,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PageRecentlyPlayed />,
      },
    ],
  },
  {
    path: `${Pages.TRACK}/:id`,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PageTrack />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
