import { combineReducers } from 'redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { userAuthSlice, settingsSlice, playerSlice } from '../slices';

const rootReducer = combineReducers({
  [userAuthSlice.name]: userAuthSlice.reducer,
  [settingsSlice.name]: settingsSlice.reducer,
  [playerSlice.name]: playerSlice.reducer,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const store = makeStore();
