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

const createPersistedReducer = (key, reducer) => {
  const persistConfig = {
    key,
    storage,
  };
  return persistReducer(persistConfig, reducer);
};

export const store = configureStore({
  reducer: {
    nannies: nanniesReducer,
    favorites: createPersistedReducer('favorites', favoritesReducer),
    auth: createPersistedReducer('auth', authReducer),
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
