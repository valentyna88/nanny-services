import { configureStore } from '@reduxjs/toolkit';
import nannyReducer from './nannies/slice';
import favoritesReducer from './favorites/slice';

export const store = configureStore({
  reducer: {
    nannies: nannyReducer,
    favorites: favoritesReducer,
  },
});
