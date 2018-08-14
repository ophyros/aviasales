import {
  FETCH_CURRENCY_RATES,
  FETCH_CURRENCY_RATES_ERROR,
  FETCH_CURRENCY_RATES_SUCCESS,
  SET_CURRENT_CURRENCY
} from '../actions/currenciesActions';

const initialState = {
  baseCurrency: 'RUB',
  availableCurrencies: ['RUB', 'USD', 'EUR'],
  currentCurrency: 'RUB',
  isFetching: false,
  error: '',
  rates: []
}

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_RATES:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_CURRENCY_RATES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case FETCH_CURRENCY_RATES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        rates: action.payload
      }
    case SET_CURRENT_CURRENCY:
      return {
        ...state,
        currentCurrency: action.payload
      }
    default:
      return state;
  }
}

export default currenciesReducer;
