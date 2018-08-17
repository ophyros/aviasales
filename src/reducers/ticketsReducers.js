/*import data from '../data/tickets.json';

const tickets = (state = [], action) => {
  switch (action.type) {
    default:
      return data.tickets;
  }
}*/

import {
  FETCH_TICKETS_DATA,
  FETCH_TICKETS_DATA_ERROR,
  FETCH_TICKETS_DATA_SUCCESS
} from '../actions/ticketsActions';

const initialState = {
  isFetching: false,
  error: '',
  tickets: []
}

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_DATA:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_TICKETS_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case FETCH_TICKETS_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tickets: action.payload
      }
    default:
      return state;
  }
}

export default ticketsReducer;
