export const FETCH_CURRENCY_RATES = 'FETCH_CURRENCY_RATES';
export const FETCH_CURRENCY_RATES_ERROR = 'FETCH_CURRENCY_RATES_ERROR';
export const FETCH_CURRENCY_RATES_SUCCESS = 'FETCH_CURRENCY_RATES_SUCCESS';
export const SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY';

const currencyAPIURL = 'http://api.openrates.io/latest?';

export const fetchCurrencyRates = () => ({
    type: FETCH_CURRENCY_RATES
});

export const fetchCurrencyRatesError = (error) => ({
    type: FETCH_CURRENCY_RATES_ERROR,
    payload: error
});

export const fetchCurrencyRatesSuccess = (responce) => ({
    type: FETCH_CURRENCY_RATES_SUCCESS,
    payload: responce
});

export const setCurrentCurrency = (currency) => ({
    type: SET_CURRENT_CURRENCY,
    payload: currency
});

export const fetchCurrenciesFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchCurrencyRates());

    const { baseCurrency, availableCurrencies } = getState().currencies;

    const URL = currencyAPIURL + 'base=' + baseCurrency + '&symbols=' + availableCurrencies.join(',');

    return fetch(URL)
      .then(
        response => response.json(),
        error => dispatch(fetchCurrencyRatesError(error))
      )
      .then(
        json => dispatch(fetchCurrencyRatesSuccess(json.rates)),
        error => dispatch(fetchCurrencyRatesError(error))
      );
  }
}
