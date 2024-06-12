import { AlbumType } from './album';
import { ArtistType } from './artist';
import { EpisodeType } from './episode';
import { PlaylistType } from './playlist';
import { ShowType } from './show';
import { TrackType } from './track';

export type SearchType = {
  albums: {
    items: AlbumType[];
  };
  artists: {
    items: ArtistType[];
  };
  episodes: {
    items: EpisodeType[];
  };
  playlists: {
    items: PlaylistType[];
  };
  shows: {
    items: ShowType[];
  };
  tracks: {
    items: TrackType[];
  };
};
