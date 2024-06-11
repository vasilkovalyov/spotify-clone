import { LocalStorageService, SpotifyService } from '@/services';
import { StatusLoadingBuilder } from '@/types/common';
import { UserType } from '@/types/user';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const defaultUserState: UserType = {
  display_name: '',
  external_urls: {
    spotify: '',
  },
  href: '',
  id: '',
  images: [],
  type: '',
  uri: '',
  followers: {
    href: null,
    total: 0,
  },
  country: '',
  product: '',
  explicit_content: {
    filter_enabled: false,
    filter_locked: false,
  },
  email: '',
};

export type UserAuthStateType = {
  user: UserType;
  isAuth: boolean;
  loading: boolean;
  status: StatusLoadingBuilder;
  error?: string | null;
};

export const getMe = createAsyncThunk(
  'auth/me',
  async ({ accessToken }: { accessToken?: string }) => {
    if (!LocalStorageService.getAccessToken()) {
      return null;
    }

    const response = await SpotifyService.getMe(accessToken);
    return response.data;
  }
);

const initialState: UserAuthStateType = {
  user: defaultUserState,
  isAuth: false,
  status: 'succeeded',
  loading: false,
  error: null,
};

export const userAuthSlice = createSlice({
  name: 'userAuthSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload !== null) {
          state.user = action.payload;
          state.isAuth = true;
        }
      })
      .addCase(getMe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userAuthSlice.reducer;
