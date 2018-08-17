import { buildAvailableOptions } from './stopsFilterActions';

export const FETCH_TICKETS_DATA = 'FETCH_TICKETS_DATA';
export const FETCH_TICKETS_DATA_ERROR = 'FETCH_TICKETS_DATA_ERROR';
export const FETCH_TICKETS_DATA_SUCCESS = 'FETCH_TICKETS_DATA_SUCCESS';

const ticketsDataURL = 'http://localhost:3000/data/tickets.json';

export const fetchTicketsData = () => ({
    type: FETCH_TICKETS_DATA
});

export const fetchTicketsDataError = (error) => ({
    type: FETCH_TICKETS_DATA_ERROR,
    payload: error
});

export const fetchTicketsDataSuccess = (responce) => ({
    type: FETCH_TICKETS_DATA_SUCCESS,
    payload: responce
});

export const fetchTicketsFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchTicketsData());

    return setTimeout(() => fetch(ticketsDataURL)
      .then(
        response => response.json()
      )
      .then(
        json => {
          dispatch(fetchTicketsDataSuccess(json.tickets))
          dispatch(buildAvailableOptions());
        }
      )
      .catch(
        error => dispatch(fetchTicketsDataError(error))
      ), 1000);
  }
}
