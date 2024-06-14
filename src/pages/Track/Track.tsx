import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  BlockBannerMedia,
  BlockRecomendation,
  BlockArtistPopularTracks,
  BlockRelateArtists,
} from '@/blocks';
import { TrackType } from '@/types/track';
import { ArtistType } from '@/types/artist';
import { SpotifyService } from '@/services';
import { getDescriptionListForBanner } from './Track.utils';
import { BlockArtistAlbumSimple } from '@/blocks/block-artist-album-simple';

function PageTrack() {
  const { id } = useParams();

  const [track, setTrack] = useState<TrackType | null>(null);
  const [artist, setArtist] = useState<ArtistType | null>(null);

  async function loadData() {
    try {
      const trackResponse = await SpotifyService.getTrackById(id as string);
      const artistResponse = await SpotifyService.getAtristById(
        trackResponse.data.artists[0].id
      );

      setTrack(trackResponse.data);
      setArtist(artistResponse.data);
    } catch (e) {
      console.log(e);
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
          <BlockRecomendation
            trackId={track.id}
            artistId={artist.id}
            title="Recommended"
            subtitle="Based on this song"
          />
          <BlockArtistPopularTracks
            artistId={artist.id}
            title={artist.name}
            subtitle="Popular Tracks by"
          />
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
