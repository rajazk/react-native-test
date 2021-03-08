import * as Constants from "../constants/constants";

const inititalState = {
  covidSummary: {}
};

export default function covidSummaryReducer(state = inititalState, action) {
  switch (action.type) {
    case Constants.GET_COVID_SUMMARY_SUCCESS:
      return Object.assign({}, state, {
        covidSummary: action.data,
      });
    default:
      return state;
  }
}
