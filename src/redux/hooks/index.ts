import { TypedUseSelectorHook, useDispatch, useStore } from 'react-redux';
import { AppDispatch, AppStore, RootState } from '../store';
import { useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore.withTypes<AppStore>();
