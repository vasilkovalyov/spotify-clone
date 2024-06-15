import { LocalStorageService, AuthService } from '@/services';
import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_API_SECONDARY_URL}/`,
  method: 'get, post, put, delete, patch',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: import.meta.env.VITE_REACT_API_LAST_FM_API_KEY,
  },
});

export default api;
