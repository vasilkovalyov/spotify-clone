import { LocalStorageService, SpotifyService } from '@/services';
import { StatusLoadingBuilder } from '@/types/common';
import { DeviceType } from '@/types/device';
import { TrackType } from '@/types/track';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store';

export type PlayerStateType = {
  currentTrack: TrackType | null;
  device: DeviceType | null;
  shuffle: boolean;
  repeat: boolean;
  loading: boolean;
  status: StatusLoadingBuilder;
  error?: string | null;
};

const initialState: PlayerStateType = {
  currentTrack: null,
  device: null,
  shuffle: false,
  repeat: false,
  loading: false,
  status: 'loading',
  error: null,
};

export const getAvailableDevices = createAsyncThunk(
  'me/player/devices',
  async () => {
    const response = await SpotifyService.getAvailableDevices();
    return response.data;
  }
);

export const updateVolumeDevice = createAsyncThunk<
  any,
  number,
  { state: AppState }
>('me/player/volume', async (value: number, { getState }) => {
  const state = getState();
  console.log('state', state);

  if (!state.playerSlice.device) return;
  try {
    const response = await SpotifyService.updateVolume(
      state.playerSlice.device.id,
      value
    );

    return response;
  } catch (e) {
    console.log(e);
  }
});

export const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {
    fetchPlayerSettings: (state) => {},
    toggleShuffle: (state) => {
      if (state.shuffle) {
        state.shuffle = false;
        return;
      }
      state.shuffle = true;
    },
    toggleRepeat: (state) => {
      if (state.repeat) {
        state.repeat = false;
        return;
      }
      state.repeat = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAvailableDevices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        getAvailableDevices.fulfilled,
        (state, action: PayloadAction<{ devices: DeviceType[] }>) => {
          state.status = 'succeeded';
          state.device = action.payload.devices[0];
        }
      )
      .addCase(getAvailableDevices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateVolumeDevice.fulfilled, (state, action) => {
        console.log('action', action);
      });
  },
});

export const { fetchPlayerSettings, toggleShuffle, toggleRepeat } =
  playerSlice.actions;

export default playerSlice.reducer;
