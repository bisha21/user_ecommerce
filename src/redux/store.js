import { configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import { rootReducer } from './rootReducer';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import { PERSIST } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist:["auth","carts"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //  Use this code to remove serializable check error due to redux-persist
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST],
      },
    });
  },
});

export const persistor = persistStore(store);
