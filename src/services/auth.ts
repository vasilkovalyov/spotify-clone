import axios from 'axios';
import { Buffer } from 'buffer';
import { LocalStorageService } from './localStorage';

type TokenResponseType = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
};

type RefreshTokenResponseType = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export class AuthService {
  private static getScopes(): string {
    return 'user-read-private user-read-email playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public user-library-read user-library-modify user-read-playback-state user-modify-playback-state user-read-currently-playing user-follow-read user-follow-modify user-read-recently-played streaming user-top-read';
  }

  public static getLoginUrl(): string {
    const params = new URLSearchParams({
      client_id: import.meta.env.VITE_REACT_API_CLIENT_ID,
      response_type: 'code',
      redirect_uri:
        import.meta.env.VITE_REACT_API_REDIRECT_URL ||
        'http://192.168.1.5:5173',
      show_dialog: 'true',
      scope: this.getScopes(),
    });
    return `${import.meta.env.VITE_REACT_API_AUTH_URL}?${params}`;
  }

  public static getCodeAuthFromUrl(): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code');
  }

  public static async authentication(token: string) {
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: token,
      response_type: 'code',
      redirect_uri:
        import.meta.env.VITE_REACT_API_REDIRECT_URL ||
        'http://192.168.1.5:5173',
      client_id: import.meta.env.VITE_REACT_API_CLIENT_ID,
      client_secret: import.meta.env.VITE_REACT_API_CLIENT_SECRET,
    });

    const response = await axios.post<TokenResponseType>(
      import.meta.env.VITE_REACT_API_TOKEN_URL,
      body,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          Authorization:
            'Basic ' +
            Buffer.from(
              import.meta.env.VITE_REACT_API_CLIENT_ID +
                ':' +
                import.meta.env.VITE_REACT_API_CLIENT_SECRET
            ).toString('base64'),
          // `${import.meta.env.VITE_REACT_API_CLIENT_ID}:${import.meta.env.VITE_REACT_API_CLIENT_SECRET}`,
        },
      }
    );

    const { access_token, refresh_token } = response.data;

    LocalStorageService.setAccessToken(access_token);
    LocalStorageService.setRefreshToken(refresh_token);
    window.history.replaceState(null, '', window.location.pathname);

    return response;
  }

  public static async refreshToken() {
    const refreshToken = localStorage.getItem('refresh_token');

    const body = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken || '',
      client_id: import.meta.env.VITE_REACT_API_CLIENT_ID,
      client_secret: import.meta.env.VITE_REACT_API_CLIENT_SECRET,
    });

    const response = await axios.post<RefreshTokenResponseType>(
      import.meta.env.VITE_REACT_API_TOKEN_URL,
      body,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            Buffer.from(
              import.meta.env.VITE_REACT_API_CLIENT_ID +
                ':' +
                import.meta.env.VITE_REACT_API_CLIENT_SECRET
            ).toString('base64'),
          // `${import.meta.env.VITE_REACT_API_CLIENT_ID}:${import.meta.env.VITE_REACT_API_CLIENT_SECRET}`,
        },
      }
    );

    const { access_token } = response.data;

    LocalStorageService.setAccessToken(access_token);

    return response;
  }
}
