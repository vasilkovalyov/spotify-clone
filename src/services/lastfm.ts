import $api from '@/api/lastfm';
import { AxiosPromise } from 'axios';
import { LastFrArtistType } from '@/types/lastfm/artist';

export class LastFmService {
  public static async getBandIndo(
    name: string
  ): Promise<AxiosPromise<{ artist: LastFrArtistType }>> {
    const endpoint = `?method=artist.getinfo&artist=${encodeURIComponent(name)}&format=json`;

    const response = await $api.get(endpoint);
    return response;
  }
}
