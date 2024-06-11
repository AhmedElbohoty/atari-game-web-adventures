import { combineReducers, configureStore } from "@reduxjs/toolkit";

import appSlice from "store/appSlice/slice";

const rootReducer = combineReducers({
  app: appSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export default store;
