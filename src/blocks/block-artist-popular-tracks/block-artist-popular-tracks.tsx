import { useEffect, useState } from 'react';

import { TrackList } from '@/components';
import { Button } from '@/components/3-ui';

import { SpotifyService } from '@/services';
import { StatusLoadingBuilder } from '@/types/common';

import { TrackProps } from '@/components/track/track.type';
import { BlockArtistPopularTrackProps } from './block-artist-popular-tracks.type';

import './block-artist-popular-tracks.scss';

function BlockArtistPopularTracks({
  artistId,
  title,
  subtitle,
}: BlockArtistPopularTrackProps) {
  const [statusLoading, setStatusLoading] =
    useState<StatusLoadingBuilder>('loading');
  const totalTracksCount = 10;
  const visibleTracksCount = 5;

  const [visibleTracks, setVisibleTracks] = useState<TrackProps[]>([]);
  const [invisibleTracks, setInvisibleTracks] = useState<TrackProps[]>([]);

  async function loadTracks() {
    try {
      setStatusLoading('loading');
      const response = await SpotifyService.getArtistPopularTracks(
        artistId,
        totalTracksCount
      );
      const array: TrackProps[] = response.data.tracks.map((item, index) => {
        return {
          id: item.id,
          name: item.name,
          image: item.album.images[0],
          duration: item.duration_ms,
          artistId: item.artists[0].id,
          albumId: item.album.id,
          albumName: item.album.name,
          href: `/track/${item.id}`,
          number: index + 1,
        };
      });
      setVisibleTracks(array.slice(0, visibleTracksCount));
      setInvisibleTracks(array.slice(visibleTracksCount, totalTracksCount));
    } catch (e) {
      setStatusLoading('failed');
    } finally {
      setStatusLoading('succeeded');
    }
  }

  function onHandleVisibilityTracks() {
    let arr: TrackProps[] = [];

    if (visibleTracks.length <= visibleTracksCount) {
      arr = [...visibleTracks, ...invisibleTracks];
    } else {
      arr = visibleTracks.splice(0, visibleTracksCount);
    }

    setVisibleTracks(arr);
  }

  useEffect(() => {
    loadTracks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="block-artist-popular-tracks">
      <div className="block-artist-popular-tracks__container">
        <div className="block-artist-popular-tracks__head">
          {subtitle && <p>{subtitle}</p>}
          {title && <h2 className="text-light">{title}</h2>}
        </div>
        <TrackList items={visibleTracks} statusLoading={statusLoading} />
        <Button onClick={onHandleVisibilityTracks}>
          {visibleTracks.length <= visibleTracksCount
            ? 'See more'
            : 'Show less'}
        </Button>
      </div>
    </section>
  );
}

export default BlockArtistPopularTracks;
