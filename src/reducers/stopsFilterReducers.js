import { combineReducers } from 'redux';

import {
  ADD_STOPS_TO_FILTER,
  REMOVE_STOPS_FROM_FILTER,
  SET_ONE_STOP_TO_FILTER,
  RESET_STOPS_FILTER,
  BUILD_AVAILABLE_OPTIONS
} from '../actions/stopsFilterActions';

const availableOptionsReducer = (state = [], action) => {
  switch (action.type) {
    case BUILD_AVAILABLE_OPTIONS:
      return action.payload;
    default:
      return state;
  }
}

const selectedOptionsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STOPS_TO_FILTER:
      return [
        ...state,
        action.payload
      ];
    case REMOVE_STOPS_FROM_FILTER:
      return state.filter( item => item !== action.payload );
    case SET_ONE_STOP_TO_FILTER:
      return [
        action.payload
      ];
    case RESET_STOPS_FILTER:
      return [];
    default:
      return state;
  }
}

export default combineReducers({
  availableOptions: availableOptionsReducer,
  selectedOptions: selectedOptionsReducer
});
