import { LocalStorageService, AuthService } from '@/services';
import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_API_BASE_URL}/`,
  method: 'get, post, put, delete, patch',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((request) => {
  const accessToken = LocalStorageService.getAccessToken();

  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
  return request;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!LocalStorageService.getAccessToken()) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !originalRequest._retry
    ) {
      error.config._isRetry = true;
      axios.interceptors.response.eject;
      try {
        const response = await AuthService.refreshToken();
        const { access_token } = await response.data;
        LocalStorageService.setAccessToken(access_token);
        return api.request(originalRequest);
      } catch (e) {
        if (e instanceof AxiosError) {
          LocalStorageService.removeAccessToken();
          window.location.href = '/';
        }
        return Promise.reject(error);
      }
    }
    throw error;
  }
);

export default api;
