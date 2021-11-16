import { configureStore } from '@reduxjs/toolkit';
import {
  // persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';

import contactsReducers from './contacts/contacts-reducers';

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

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },
  middleware: getMiddleware,
  devTools: process.env.NODE_ENV === 'development', // devTools применяются тлько в разработке
});

// const persistor = persistStore(store);

// export default { store, persistor };
export default store;
