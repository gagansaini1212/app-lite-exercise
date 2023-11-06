import { configureStore, combineReducers } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storageSession from "redux-persist/lib/storage/session";
import shows from "./reducers/shows";

const persistConfig = {
  key: "next-redux-app",
  storageSession,
  storage,
};

const allReducers = combineReducers({
  shows,
});
const persistedReducer = persistReducer(persistConfig, allReducers);

// export const store = configureStore({
//   reducer: allReducers,
//   // devTools: process.env.NODE_ENV !== 'production',
// });

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
