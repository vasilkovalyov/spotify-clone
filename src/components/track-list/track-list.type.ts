import { StatusLoadingBuilder } from '@/types/common';
import { TrackProps } from '../track/track.type';

export type TrackListProps = {
  items: TrackProps[];
  statusLoading: StatusLoadingBuilder;
  skeletonCount?: number;
};
