import { ListSkeletons } from '../list-skeletons';
import { Track, TrackSkeleton } from '../track';
import { TrackListProps } from './track-list.type';

function TrackList({
  items,
  statusLoading = 'loading',
  skeletonCount = 4,
}: TrackListProps) {
  return (
    <div className="track-list">
      {statusLoading === 'loading' && (
        <ListSkeletons count={skeletonCount}>
          <TrackSkeleton />
        </ListSkeletons>
      )}
      {statusLoading === 'succeeded' &&
        items.length &&
        items.map((item) => <Track key={item.id} {...item} />)}
    </div>
  );
}

export default TrackList;
