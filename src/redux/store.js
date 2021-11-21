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
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import contactsReducers from './contacts/contacts-reducers';
import authReducers from './auth/auth-reducers';

const getMiddleware = getDefaultMiddleware =>
  process.env.NODE_ENV === 'development'
    ? getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
          ],
        },
      }).concat(logger)
    : getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
          ],
        },
      });

const tokenPersistConfig = {
  key: 'user-token',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    auth: persistReducer(tokenPersistConfig, authReducers),
  },
  middleware: getMiddleware,
  devTools: process.env.NODE_ENV === 'development', // devTools применяются тлько в разработке
});

export const persistor = persistStore(store);
