import { ImageType } from '@/types/image';

export type TrackProps = {
  id: string;
  name: string;
  image: ImageType;
  duration: number;
  artistId: string;
  artistName: string;
  albumId: string;
  albumName: string;
  href: string;
  hrefArtist: string;
  playing?: boolean;
  selected?: boolean;
  onClickTogglePlay?: (playing: boolean) => void;
  onClickSelected?: () => void;
};
