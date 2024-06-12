import { ImageType } from './image';

export type ArtistType = {
  images: ImageType[];
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
  name: string;
  type: string;
  uri: string;
  popularity: number;
};
