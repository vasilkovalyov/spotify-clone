import { ImageType } from './image';

export type PlaylistType = {
  images: ImageType[];
  owner: {
    display_name: string;
    external_urls: { spotify: string };
    spotify: string;
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  external_urls: { spotify: string };
  tracks: { href: string; total: number };
  collaborative: boolean;
  description: string;
  href: string;
  id: string;
  name: string;
  primary_color: string | null;
  public: null;
  snapshot_id: string;
  type: string;
  uri: string;
};
