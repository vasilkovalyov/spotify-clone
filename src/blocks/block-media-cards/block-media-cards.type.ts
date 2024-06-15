import { MediaCardProps } from '@/components/media-card/media-card.type';
import { StatusLoadingBuilder } from '@/types/common';

export type BlockMediaCardsProps = {
  title: string;
  items: MediaCardProps[];
  statusLoading: StatusLoadingBuilder;
  link?: {
    name: string;
    path: string;
  };
};
