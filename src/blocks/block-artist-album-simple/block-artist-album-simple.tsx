import { useEffect, useState } from 'react';

import { AlbumPanel, TrackList } from '@/components';

import { SpotifyService } from '@/services';
import { Pages } from '@/constants/pages';
import { StatusLoadingBuilder } from '@/types/common';
import { TrackProps } from '@/components/track/track.type';

import { BlockArtistAlbumSimpleProps } from './block-artist-album-simple.type';

import './block-artist-album-simple.scss';

function BlockArtistAlbumSimple({
  albumId,
  image,
  name,
}: BlockArtistAlbumSimpleProps) {
  const [statusLoading, setStatusLoading] =
    useState<StatusLoadingBuilder>('loading');

  const [tracks, setTracks] = useState<TrackProps[]>([]);

  async function loadTracks() {
    try {
      setStatusLoading('loading');
      const response = await SpotifyService.getAlbumTracksById(albumId);
      const array: TrackProps[] = response.data.items.map((item, index) => {
        return {
          id: item.id,
          name: item.name,
          duration: item.duration_ms,
          artistId: item.artists[0].id,
          artistName: item.artists[0].name,
          href: `/track/${item.id}`,
          hrefArtist: `/artist/${item.artists[0].id}`,
          number: index + 1,
        };
      });

      setTracks(array);
    } catch (e) {
      console.log(e);
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
    <section className="block-artist-album-simple">
      <div className="block-artist-album-simple__container">
        <AlbumPanel
          image={image}
          subtitle="From the album"
          name={name}
          href={`${Pages.ALBUM}/${albumId}`}
        />
        <TrackList items={tracks} statusLoading={statusLoading} />
      </div>
    </section>
  );
}

export default BlockArtistAlbumSimple;
