import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  BlockBannerMedia,
  BlockRecomendation,
  BlockArtistPopularTracks,
  BlockRelateArtists,
  BlockMediaCards,
} from '@/blocks';
import { TrackType } from '@/types/track';
import { ArtistType } from '@/types/artist';
import { SpotifyService } from '@/services';
import { getDescriptionListForBanner } from './Track.utils';
import { BlockArtistAlbumSimple } from '@/blocks/block-artist-album-simple';
import { AlbumType } from '@/types/album';
import { MediaCardProps } from '@/components';
import { StatusLoadingBuilder } from '@/types/common';
import { Pages } from '@/constants/pages';
import { settings } from '@/constants/settins';

function PageTrack() {
  const { id } = useParams();
  const [statusLoading, setStatusLoading] =
    useState<StatusLoadingBuilder>('loading');

  const [track, setTrack] = useState<TrackType | null>(null);
  const [artist, setArtist] = useState<ArtistType | null>(null);
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  async function loadData() {
    try {
      setStatusLoading('loading');
      const trackResponse = await SpotifyService.getTrackById(id as string);
      const artistResponse = await SpotifyService.getAtristById(
        trackResponse.data.artists[0].id
      );
      const albumsResponse = await SpotifyService.getDataSearch(
        artistResponse.data.name,
        {
          type: ['album'],
          limit: 6,
        }
      );
      setTrack(trackResponse.data);
      setArtist(artistResponse.data);
      setAlbums(albumsResponse.data.albums.items);
    } catch (e) {
      setStatusLoading('failed');
    } finally {
      setStatusLoading('succeeded');
    }
  }

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-track">
      {track && artist && (
        <>
          <BlockBannerMedia
            name={track.name}
            type={track.type}
            image={track.album.images[1]}
            descriptionList={getDescriptionListForBanner(track, artist)}
          />
          {/* <BlockRecomendation
            trackId={track.id}
            artistId={artist.id}
            title="Recommended"
            subtitle="Based on this song"
          /> */}
          <BlockArtistPopularTracks
            artistId={artist.id}
            title={artist.name}
            subtitle="Popular Tracks by"
          />
          {albums && (
            <BlockMediaCards
              title={`Albums by ${artist.name}`}
              link={{
                name: 'Show all',
                path: `${Pages.ARTIST}/${artist.id}/discography/album`,
              }}
              items={albums
                .slice(0, settings.blockMediaCardsItemsCount)
                .map<MediaCardProps>((item) => {
                  return {
                    id: item.id,
                    image: item.images[1],
                    name: item.name,
                    type: `${item.release_date.split('-')[0]} • ${item.type}`,
                    href: `${Pages.ALBUM}/${item.id}`,
                  };
                })}
              statusLoading={statusLoading}
            />
          )}
          <BlockRelateArtists artistId={artist.id} />
          <BlockArtistAlbumSimple
            albumId={track.album.id}
            image={track.album.images[1]}
            name={artist.name}
          />
        </>
      )}
    </div>
  );
}

export default PageTrack;
