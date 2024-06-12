import { useEffect, useState } from 'react';
import cn from 'classnames';

import { SpotifyService } from '@/services';
import { Pages } from '@/constants/pages';
import { StatusLoadingBuilder } from '@/types/common';
import { RelateArtistType } from '@/types/relate-artist';

import {
  BlockHead,
  ListSkeletons,
  MediaCard,
  MediaCardSkeleton,
} from '@/components';

import { BlockRelateArtistsProps } from './block-relate-artists.type';

import './block-relate-artists.scss';

function BlockRelateArtists({
  artistId,
  isLimited = false,
}: BlockRelateArtistsProps) {
  const [statusLoading, setStatusLoading] =
    useState<StatusLoadingBuilder>('loading');
  const [artists, setArtists] = useState<RelateArtistType[]>([]);

  const classnameMediaCardGrid = cn('media-card-grid', {
    'media-card-grid--full': isLimited,
  });

  async function loadArtists() {
    try {
      setStatusLoading('loading');
      const response = await SpotifyService.getRelateArtists(
        artistId,
        isLimited ? undefined : 6
      );
      setArtists(response);
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
    <section className={cn('block-relate-artists', {})}>
      <div className="block-relate-artists__container">
        <BlockHead
          isTitleLarge={isLimited}
          title="Fans also like"
          link={
            isLimited
              ? undefined
              : {
                  name: 'Show all',
                  path: `${Pages.ARTIST}/${artistId}/related`,
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
            {artists.length &&
              artists.map(({ id, name, type, images }) => (
                <MediaCard
                  key={id}
                  id={id}
                  href={`${Pages.ARTIST}/${id}`}
                  image={images[1]}
                  name={name}
                  type={type}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default BlockRelateArtists;
