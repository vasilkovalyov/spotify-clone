import { LocalStorageEnum } from '@/constants/local-storage';
import { LocalStorageService } from '@/services';
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
      LocalStorageService.setExpandedLeftSidebar(action.payload);
    },
    fetchSettings: (state) => {
      const expandedLeftSidebarLS =
        LocalStorageService.getExpandedLeftSidebar();

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
