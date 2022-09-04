// get errors from types.js

import { GET_ERRORS } from "../actions/types";
// define initialstate
const initialState = {};
//how state should change based on actions with a switch statement
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}