import { LocalStorageEnum } from '@/constants/local-storage';
import { StatusLoadingBuilder } from '@/types/common';
import { createSlice } from '@reduxjs/toolkit';

export type SettingsStateType = {
  isExpandedLeftSidebar: boolean;
  loading: boolean;
  status: StatusLoadingBuilder;
  error?: string | null;
};

const initialState: SettingsStateType = {
  isExpandedLeftSidebar: true,
  status: 'succeeded',
  loading: false,
  error: null,
};

export const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {
    toggleExpandedLeftSidebar: (state, action) => {
      state.isExpandedLeftSidebar = action.payload;
      localStorage.setItem(
        LocalStorageEnum.EXPANDED_LEFT_SIDEBAR,
        action.payload
      );
    },
    fetchSettings: (state) => {
      const expandedLeftSidebarLS = localStorage.getItem(
        LocalStorageEnum.EXPANDED_LEFT_SIDEBAR
      );
      if (expandedLeftSidebarLS === 'true') {
        state.isExpandedLeftSidebar = true;
      } else {
        state.isExpandedLeftSidebar = false;
      }
    },
  },
});

export const { toggleExpandedLeftSidebar, fetchSettings } =
  settingsSlice.actions;

export default settingsSlice.reducer;
