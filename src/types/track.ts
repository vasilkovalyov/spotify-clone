import { AlbumType } from './album';
import { ArtistType } from './artist';

export type TrackType = {
  album: AlbumType;
  artists: ArtistType[];
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export type RecentlyTrackType = {
  track: TrackType;
  context: {
    external_urls: {
      spotify: string;
    };
    href: string;
    type: string;
    uri: string;
  };
  played_at: string;
};
