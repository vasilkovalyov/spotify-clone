import { LocalStorageService } from '@/services';
import { StatusLoadingBuilder } from '@/types/common';
import { HelperPanelType } from '@/types/store';
import { createSlice } from '@reduxjs/toolkit';

export type SettingsStateType = {
  isExpandedLeftSidebar: boolean;
  helperPanel: HelperPanelType | null;

  loading: boolean;
  status: StatusLoadingBuilder;
  error?: string | null;
};

const initialState: SettingsStateType = {
  isExpandedLeftSidebar: true,
  status: 'succeeded',
  helperPanel: null,
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

      state.helperPanel =
        LocalStorageService.getHelperType() as HelperPanelType | null;
    },
    updateHelperPanel: (state, action) => {
      if (action.payload === state.helperPanel) {
        state.helperPanel = null;
        LocalStorageService.removeHelperType();
        return;
      }
      state.helperPanel = action.payload;
      LocalStorageService.setHelperType(action.payload);
    },
  },
});

export const {
  toggleExpandedLeftSidebar,
  fetchSettings,

  updateHelperPanel,
} = settingsSlice.actions;

export default settingsSlice.reducer;
