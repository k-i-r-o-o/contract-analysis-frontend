import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from "react-redux";
import { combineReducers } from "redux";

import appReducer from "common/redux/app/app.slice";
import {
  reducer as apiReducer,
  reducerPath as apiReducerPath
} from "common/redux/core/api.base";

import { AppDispatch } from "./store.config";

const rootReducer = combineReducers({
  app: appReducer,
  [apiReducerPath]: apiReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

// **Use throughout the app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
