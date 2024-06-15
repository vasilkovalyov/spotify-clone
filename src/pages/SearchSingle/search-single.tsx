import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BlockMediaCards } from '@/blocks';
import { SpotifyService } from '@/services';
import { StatusLoadingBuilder } from '@/types/common';
import { SearchType } from '@/types/search';
import {
  TrackList,
  TopResultArtistProps,
  BlockHead,
  MediaCardProps,
  TopResultArtist,
  TopResultArtistSkeleton,
} from '@/components';

import './search-single.scss';
import { settings } from '@/constants/settins';

export default function SearchSinglePage() {
  const { value } = useParams();
  const [statusLoading, setStatusLoading] =
    useState<StatusLoadingBuilder>('loading');
  const [topResult, setTopResult] = useState<TopResultArtistProps | null>(null);
  const [data, setData] = useState<SearchType | null>(null);

  async function loadData() {
    try {
      setStatusLoading('loading');
      const response = await SpotifyService.getDataSearch(value as string, {
        type: ['album', 'artist', 'episode', 'playlist', 'show', 'track'],
      });
      const artistId = response.data.tracks.items[0].artists[0].id;
      const responseArtist = await SpotifyService.getAtristById(artistId);

      setTopResult({
        href: `/artist/${artistId}`,
        id: responseArtist.data.id,
        image: responseArtist.data.images[1],
        name: responseArtist.data.name,
        type: responseArtist.data.type,
      });
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
  }, []);

  return (
    <div className="search-single-page">
      <div className="search-single-page__container">
        <div className="search-single-page__grid">
          <div className="search-single-page__col">
            <BlockHead isTitleLarge={false} title="Top result" />
            {statusLoading === 'loading' && <TopResultArtistSkeleton />}
            {statusLoading === 'succeeded' && topResult && (
              <TopResultArtist {...topResult} />
            )}
          </div>
          <div className="search-single-page__col">
            <BlockHead isTitleLarge={false} title="Songs" />
            <TrackList
              items={
                data?.tracks.items.slice(0, 4).map((item) => {
                  return {
                    id: item.id,
                    name: item.name,
                    image: item.album.images[0],
                    duration: item.duration_ms,
                    artistId: item.artists[0].id,
                    artistName: item.artists[0].name,
                    albumId: item.album.id,
                    albumName: item.album.name,
                    href: `/track/${item.id}`,
                    hrefArtist: `/artist/${item.artists[0].id}`,
                  };
                }) || []
              }
              statusLoading={statusLoading}
            />
          </div>
        </div>
      </div>
      <div className="search-single-page__blocks">
        {data?.artists && (
          <BlockMediaCards
            title="Artists"
            items={data.artists.items
              .slice(0, settings.blockMediaCardsItemsCount)
              .map<MediaCardProps>((item) => {
                return {
                  id: item.id,
                  image: item.images[1],
                  name: item.name,
                  type: item.type,
                };
              })}
            statusLoading={statusLoading}
          />
        )}
        {data?.albums && (
          <BlockMediaCards
            title="Albums"
            items={data.albums.items
              .slice(0, settings.blockMediaCardsItemsCount)
              .map<MediaCardProps>((item) => {
                return {
                  id: item.id,
                  image: item.images[1],
                  name: item.name,
                  type: item.type,
                };
              })}
            statusLoading={statusLoading}
          />
        )}
        {data?.episodes && (
          <BlockMediaCards
            title="Episodes"
            items={data.episodes.items
              .slice(0, settings.blockMediaCardsItemsCount)
              .map<MediaCardProps>((item) => {
                return {
                  id: item.id,
                  image: item.images[1],
                  name: item.name,
                  type: item.type,
                };
              })}
            statusLoading={statusLoading}
          />
        )}
        {data?.playlists && (
          <BlockMediaCards
            title="Playlists"
            items={data.playlists.items
              .slice(0, settings.blockMediaCardsItemsCount)
              .map<MediaCardProps>((item) => {
                return {
                  id: item.id,
                  image: item.images[0],
                  name: item.name,
                  type: item.type,
                };
              })}
            statusLoading={statusLoading}
          />
        )}
        {data?.shows && (
          <BlockMediaCards
            title="Shows"
            items={data.shows.items
              .slice(0, settings.blockMediaCardsItemsCount)
              .map<MediaCardProps>((item) => {
                return {
                  id: item.id,
                  image: item.images[1],
                  name: item.name,
                  type: item.type,
                };
              })}
            statusLoading={statusLoading}
          />
        )}
      </div>
    </div>
  );
}
