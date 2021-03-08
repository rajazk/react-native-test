import { combineReducers } from "redux";
import covidSummaryReducer from "./reducers";
import covidSummaryReducerUi from "./reducersUi";

const entitiesReducers = combineReducers({
  covidSummaryReducer,
});

const uiReducers = combineReducers({
  covidSummaryReducerUi,
});

export default combineReducers({
  entities: entitiesReducers,
  ui: uiReducers,
});
