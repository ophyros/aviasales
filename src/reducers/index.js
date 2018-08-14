import { combineReducers } from 'redux';

import stopsFilterReducers from './stopsFilterReducers';
import currenciesReducers from './currenciesReducers';
import ticketsReducers from './ticketsReducers';

export default combineReducers({
  tickets: ticketsReducers,
  stopsFilter: stopsFilterReducers,
  currencies: currenciesReducers
});
