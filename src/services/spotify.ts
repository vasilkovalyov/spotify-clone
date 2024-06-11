import $api from '@/api/axios';
import { AxiosPromise } from 'axios';
import { UserType } from '@/types/user';

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
}
