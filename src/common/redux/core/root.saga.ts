import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    // Add your sagas here
    // e.g., fork(someSaga),
  ]);
}
