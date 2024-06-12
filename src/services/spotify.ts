import $api from '@/api/axios';
import { AxiosPromise } from 'axios';
import { UserType } from '@/types/user';
import { CategoriesType } from '@/types/categories';
import { RelateArtistType } from '@/types/relate-artist';
import { RecentlyTrackType } from '@/types/track';

export class SpotifyService {
  public static async getMe(
    accessToken?: string
  ): Promise<AxiosPromise<UserType>> {
    if (accessToken) {
      const response = await $api.get('me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response;
    }

    const response = await $api.get('me');
    return response;
  }

  public static async getFollowing() {
    const response = await $api.get('me/following?type=artist');
    return response;
  }

  public static async getAllCategories({
    limit = 20,
    offset,
  }: {
    limit?: number;
    offset?: number;
  }): Promise<AxiosPromise<{ categories: CategoriesType }>> {
    const params = {
      limit: limit,
      offset: offset,
    };

    const response = await $api.get('browse/categories', {
      params: params,
    });

    return response;
  }

  public static async getRelateArtists(
    artistId: string,
    limit?: number
  ): Promise<RelateArtistType[]> {
    const response = await $api.get<{ artists: RelateArtistType[] }>(
      `artists/${artistId}/related-artists`
    );

    if (limit) {
      return response.data.artists.slice(0, limit);
    }

    return response.data.artists;
  }

  public static async getRecentlyPlayed(
    limit?: number,
    after?: number
  ): Promise<RecentlyTrackType[]> {
    const params = {
      limit: limit,
      after: after,
    };

    const response = await $api.get<{ items: RecentlyTrackType[] }>(
      'me/player/recently-played',
      {
        params: params,
      }
    );

    return response.data.items;
  }
}
