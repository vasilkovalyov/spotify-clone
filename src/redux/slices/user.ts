import { StatusLoadingBuilder } from '@/types/common';
import { UserType } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';

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
  extraReducers: () => {},
});

export default userAuthSlice.reducer;
