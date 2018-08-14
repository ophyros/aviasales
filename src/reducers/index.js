import { combineReducers } from 'redux';

import stopsFilterReducers from './stopsFilterReducers';
import ticketsReducers from './ticketsReducers';

export default combineReducers({
  tickets: ticketsReducers,
  stopsFilter: stopsFilterReducers
});
