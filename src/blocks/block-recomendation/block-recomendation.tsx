import { useEffect, useState } from 'react';

import { TrackList } from '@/components';

import { SpotifyService } from '@/services';
import { StatusLoadingBuilder } from '@/types/common';
import { TrackProps } from '@/components/track/track.type';

import { BlockRecomendationProps } from './block-recomendation.type';

import './block-recomendation.scss';

function BlockRecomendation({
  artistId,
  trackId,
  title,
  subtitle,
}: BlockRecomendationProps) {
  const [statusLoading, setStatusLoading] =
    useState<StatusLoadingBuilder>('loading');

  const [tracks, setTracks] = useState<TrackProps[]>([]);

  async function loadTracks() {
    try {
      setStatusLoading('loading');
      const response = await SpotifyService.getTrackRecomendation(
        trackId,
        artistId,
        {
          limit: 5,
        }
      );
      const array: TrackProps[] = response.data.tracks.map((item) => {
        return {
          id: item.id,
          name: item.name,
          image: item.album.images[0],
          duration: item.duration_ms,
          artistId: item.artists[0].id,
          artistName: item.artists[0].name,
          albumId: item.album.id,
          albumName: item.album.name,
          href: `/track/${item.id}`,
          hrefArtist: `/artist/${item.artists[0].id}`,
        };
      });
      setTracks(array);
    } catch (e) {
      setStatusLoading('failed');
    } finally {
      setStatusLoading('succeeded');
    }
  }

  useEffect(() => {
    loadTracks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="block-recomendation">
      <div className="block-recomendation__container">
        <div className="block-recomendation__head">
          {title && <h2 className="text-light">{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </div>
        <TrackList items={tracks} statusLoading={statusLoading} />
      </div>
    </section>
  );
}

export default BlockRecomendation;
