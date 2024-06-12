import { useEffect, useState } from 'react';

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

function BlockRelateArtists({ artistId }: BlockRelateArtistsProps) {
  const [statusLoading, setStatusLoading] =
    useState<StatusLoadingBuilder>('loading');
  const [artists, setArtists] = useState<RelateArtistType[]>([]);

  async function loadArtists() {
    try {
      setStatusLoading('loading');
      const response = await SpotifyService.getRelateArtists(artistId, 6);
      setArtists(response);
    } catch (e) {
      setStatusLoading('failed');
    } finally {
      setStatusLoading('succeeded');
    }
  }

  useEffect(() => {
    loadArtists();
  }, []);

  return (
    <section className="block-relate-artists">
      <div className="block-relate-artists__container">
        <BlockHead
          title="Fans also like"
          link={{
            name: 'Show all',
            path: `${Pages.ARTIST}/${artistId}/related`,
          }}
        />
        {statusLoading === 'loading' && (
          <ListSkeletons count={6} className="media-card-grid">
            <MediaCardSkeleton />
          </ListSkeletons>
        )}
        {statusLoading === 'succeeded' && (
          <div className="media-card-grid">
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
