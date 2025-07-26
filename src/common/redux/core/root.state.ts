import { initialAppState } from "../app/app.state";
import { RootState } from "./root.reducer";

export type InitialStoreState = Omit<RootState, "api"> &
  Partial<Pick<RootState, "app">>;

const initialState: InitialStoreState = {
  app: initialAppState
};

export default initialState;
