import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { albumSlice } from './album.slice';

export function createStore() {
  const store = configureStore({
    reducer: {
      album: albumSlice.reducer
    },
    preloadedState: {},
  });

  return store;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = RootStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
