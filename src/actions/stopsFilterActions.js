export const ADD_STOPS_TO_FILTER = 'ADD_STOPS_TO_FILTER';
export const REMOVE_STOPS_FROM_FILTER = 'REMOVE_STOPS_FROM_FILTER';
export const SET_ONE_STOP_TO_FILTER = 'SET_ONE_STOP_TO_FILTER';
export const RESET_STOPS_FILTER = 'RESET_STOPS_FILTER';
export const BUILD_AVAILABLE_OPTIONS = 'BUILD_AVAILABLE_OPTIONS';

export const addStopsToFilter = num => ({
    type: ADD_STOPS_TO_FILTER,
    payload: num
});

export const removeStopsFromFilter = num => ({
    type: REMOVE_STOPS_FROM_FILTER,
    payload: num
});

export const setOneStopToFilter = num => ({
    type: SET_ONE_STOP_TO_FILTER,
    payload: num
});

export const resetStopsFilter = num => ({
    type: RESET_STOPS_FILTER
});

export const buildAvailableOptions = () => {
  return (dispatch, getState) => {
    const { tickets } = getState().tickets;
    let tmp = {};
    tickets.forEach( ticket => {
      tmp[ticket.stops] = true;
    });
    const options = Object.keys(tmp).map( option => parseInt(option, 10));
    dispatch({ type: BUILD_AVAILABLE_OPTIONS, payload: options });
  }
}
