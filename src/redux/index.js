import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import configureStore from "./store";
import rootSaga from "../saga";
import ReduxPersist from "../config/ReduxPersist";

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  app: require("./appRedux").reducer,
  user: require("./userRedux").reducer,
  course: require("./courseRedux").reducer,
});

export default () => {
  let finalReducers = reducers;
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }
  let { store, persistor } = configureStore(finalReducers, rootSaga);

  return { store, persistor };
};
