import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./reducers/reducer"
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
)

export default store;
