import { useEffect, useState } from 'react';
import { StatusLoadingBuilder } from '@/types/common';

import { SpotifyService } from '@/services';
import { ArtistType } from '@/types/artist';

import { BlockBannerArtistProps } from './block-banner-artist.type';

import './block-banner-artist.scss';

function BlockBannerArtist({ artistId }: BlockBannerArtistProps) {
  const [statusLoading, setStatusLoading] =
    useState<StatusLoadingBuilder>('loading');
  const [data, setData] = useState<ArtistType | null>(null);

  async function loadData() {
    try {
      setStatusLoading('loading');
      const response = await SpotifyService.getAtristById(artistId);
      setData(response.data);
    } catch (e) {
      setStatusLoading('failed');
    } finally {
      setStatusLoading('succeeded');
    }
  }

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artistId]);

  return (
    <section className="block-banner-artist">
      <div
        className="block-banner-artist__image"
        style={{ backgroundImage: `url(${data?.images[0].url})` }}
      ></div>
      <div className="block-banner-artist__container">
        <div className="block-banner-artist__body">
          <h1 className="block-banner-artist__name text-light">{data?.name}</h1>
          <p className="block-banner-artist__listeners text-light">
            {data?.followers.total.toLocaleString()} monthly listeners
          </p>
          <ul className="block-banner-artist__tags text-light">
            {data?.genres.length &&
              data?.genres.map((genge, index, arr) => (
                <li key={genge}>
                  {genge}
                  {index < arr.length - 1 ? ',' : null}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BlockBannerArtist;
