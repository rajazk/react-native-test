import * as Constants from "../constants/constants";

const inititalState = {
  message: '',
  dataFetching: true,
  dataFetched: false,
  dataError: null
};

const CovidSummaryReducerUi = (state = inititalState, action) => {
  switch (action.type) {
    case Constants.GET_COVID_SUMMARY_REQUEST:
      return Object.assign({}, state, {
        dataFetched: false,
        dataFetching: true,
        dataError: null
      });
    
    case Constants.GET_COVID_SUMMARY_SUCCESS:
      return Object.assign({}, state, {
        dataFetched: true,
        dataFetching: false,
        dataError: null
      });

    case Constants.GET_COVID_SUMMARY_FAILURE:
      return Object.assign({}, state, {
        dataFetched: false,
        dataFetching: false,
        dataError: action.error
      });

    default:
      return state;
  }
};


export default CovidSummaryReducerUi;