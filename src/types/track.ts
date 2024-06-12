import { ImageType } from './image';

export type TrackArtist = {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type TrackAlbum = {
  artists: TrackArtist[];
  images: ImageType[];
  external_urls: {
    spotify: string;
  };
  album_type: string;
  available_markets: string[];
  href: string;
  id: string;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

export type TrackType = {
  album: TrackAlbum;
  artists: TrackArtist[];
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
