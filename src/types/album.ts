import { ArtistType } from './artist';
import { ImageType } from './image';

export type AlbumType = {
  artists: ArtistType[];
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
