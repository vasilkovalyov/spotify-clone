import { IconEnum } from '@/components/3-ui';
import { NavigationLinkProps } from './navigation.type';
import { Pages } from '@/constants/pages';

export const menu: NavigationLinkProps[] = [
  {
    title: 'Home',
    icon: IconEnum.HOME,
    activeicon: IconEnum.HOME_OUTLINE,
    href: Pages.HOME,
  },
  {
    title: 'Search',
    icon: IconEnum.SEARCH,
    activeicon: IconEnum.SEARCH_ACTIVE,
    href: Pages.SEARCH,
  },
];
