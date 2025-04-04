import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { favoritesReducer } from './favorites/slice';
import authReducer from './auth/slice';
import nanniesReducer from './nannies/slice';
import modalReducer from './modal/slice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorites',
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
  reducer: {
    nannies: nanniesReducer,
    favorites: persistedReducer,
    auth: authReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
