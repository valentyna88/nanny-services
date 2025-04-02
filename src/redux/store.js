import { configureStore } from '@reduxjs/toolkit';
import nanniesReducer from './nannies/slice';
import { favoritesReducer } from './favorites/slice';

export const store = configureStore({
  reducer: {
    nannies: nanniesReducer,
    favorites: favoritesReducer,
  },
});
