import { ImageType } from './image';

export type RelateArtistType = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: ImageType[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};
