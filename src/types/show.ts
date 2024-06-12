import { ImageType } from './image';

export type ShowType = {
  images: ImageType[];
  external_urls: {
    spotify: string;
  };
  available_markets: string[];
  copyrights: string[];
  description: string;
  explicit: boolean;
  href: string;
  html_description: string;
  id: string;
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  total_episodes: number;
  type: string;
  uri: string;
};
