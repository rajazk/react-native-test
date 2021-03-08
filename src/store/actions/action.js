import * as Constants from "../constants/constants";
import axios from "axios";

export const fetchCovidSummaryRequest = () =>{
  return {
    type: Constants.GET_COVID_SUMMARY_REQUEST,
  }
}

export const fetchCovidSummarySuccess = data => ({
  type: Constants.GET_COVID_SUMMARY_SUCCESS,
  data,
})

export const fetchCovidSummaryFailure = error => ({
  type: Constants.GET_COVID_SUMMARY_FAILURE,
  error: error,
})

export function fetchCovidSummary() {
  return dispatch => {
    dispatch( fetchCovidSummaryRequest() )

    axios.get("https://api.covid19api.com/summary")
    .then( response => {
      dispatch( fetchCovidSummarySuccess(response.data) )
    })
    .catch( error => {
      console.log("error: ",error);
      dispatch( fetchCovidSummaryFailure(error) )
    })
  }
}