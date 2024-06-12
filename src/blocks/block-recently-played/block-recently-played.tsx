import { useEffect, useState } from 'react';
import cn from 'classnames';

import { SpotifyService } from '@/services';
import { Pages } from '@/constants/pages';
import { StatusLoadingBuilder } from '@/types/common';

import {
  BlockHead,
  ListSkeletons,
  MediaCard,
  MediaCardSkeleton,
} from '@/components';
import { RecentlyTrackType } from '@/types/track';

import { BlockRecentlyPlayedProps } from './block-recently-played.type';

import './block-recently-played.scss';

function getUniqArtistTracks(
  tracks: RecentlyTrackType[],
  limit?: number
): RecentlyTrackType[] {
  let artistsObj: { [key: string]: RecentlyTrackType } = {};
  const array: RecentlyTrackType[] = [];

  for (let item of tracks) {
    if (!artistsObj[item.track.album.name]) {
      artistsObj[item.track.album.name] = item;
      if (limit && array.length === limit) break;
      array.push(item);
    }
  }
  return array;
}

function BlockRelateArtists({ isLimited = false }: BlockRecentlyPlayedProps) {
  const [statusLoading, setStatusLoading] =
    useState<StatusLoadingBuilder>('loading');
  const [songs, setSongs] = useState<RecentlyTrackType[]>([]);

  const classnameMediaCardGrid = cn('media-card-grid', {
    'media-card-grid--full': isLimited,
  });

  async function loadArtists() {
    try {
      setStatusLoading('loading');
      const response = await SpotifyService.getRecentlyPlayed();

      setSongs(getUniqArtistTracks(response, isLimited ? undefined : 6));
    } catch (e) {
      setStatusLoading('failed');
    } finally {
      setStatusLoading('succeeded');
    }
  }

  useEffect(() => {
    loadArtists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={cn('block-recently-played')}>
      <div className="block-recently-played__container">
        <BlockHead
          isTitleLarge={isLimited}
          title="Recently played"
          link={
            isLimited
              ? undefined
              : {
                  name: 'Show all',
                  path: Pages.RECENTLY_PLAYED,
                }
          }
        />
        {statusLoading === 'loading' && (
          <ListSkeletons
            count={isLimited ? 12 : 6}
            className={classnameMediaCardGrid}
          >
            <MediaCardSkeleton />
          </ListSkeletons>
        )}
        {statusLoading === 'succeeded' && (
          <div className={classnameMediaCardGrid}>
            {songs.length &&
              songs.map(({ track }) => (
                <MediaCard
                  key={track.id}
                  id={track.id}
                  image={track.album.images[1]}
                  name={track.album.name}
                  type={track.type}
                  href="/"
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default BlockRelateArtists;
