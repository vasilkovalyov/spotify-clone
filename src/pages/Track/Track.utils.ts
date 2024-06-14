import { BlockBannerMediaDescriptionProps } from '@/blocks/block-banner-media/block-banner-media.type';
import { Pages } from '@/constants/pages';
import { ArtistType } from '@/types/artist';
import { TrackType } from '@/types/track';
import { convertTrackTime } from '@/utils/common';

export function getDescriptionListForBanner(
  track: TrackType,
  artist: ArtistType
): BlockBannerMediaDescriptionProps[] {
  const arr: BlockBannerMediaDescriptionProps[] = [];

  arr.push({
    name: artist.name,
    path: `${Pages.ARTIST}/${artist.id}`,
    image: artist.images[1],
  });

  arr.push({
    name: artist.name,
    path: `${Pages.ALBUM}/${track.album.id}`,
  });

  arr.push({
    name: track.album.release_date.split('-')[0],
  });

  arr.push({
    name: convertTrackTime(track.duration_ms),
  });

  return arr;
}
