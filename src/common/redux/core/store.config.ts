import { configureStore, type EnhancedStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { middleware as apiMiddleware } from "common/redux/core/api.base";

import rootReducer from "./root.reducer";
import rootSaga from "./root.saga";
import initialState from "./root.state";
let store: EnhancedStore;

const isDev = import.meta.env.MODE !== "production";

const configureAppStore = (): EnhancedStore => {
  const sagaMiddleware = createSagaMiddleware();
  store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }).concat(sagaMiddleware, apiMiddleware),
    devTools: isDev
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
export default configureAppStore;
export { store };
export type AppDispatch = typeof store.dispatch;
